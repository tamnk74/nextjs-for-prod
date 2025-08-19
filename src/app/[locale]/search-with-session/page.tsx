'use client';

import { useState, useCallback, useEffect } from 'react';
import CloudflareTurnstile from '../../../components/CloudflareTurnstile';

export default function SearchPageWithSession() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<unknown[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const [sessionToken, setSessionToken] = useState<string>('');
  const [searchCount, setSearchCount] = useState(0);

  // Check existing session on mount
  useEffect(() => {
    const savedSession = localStorage.getItem('turnstile_session');
    if (savedSession) {
      try {
        const session = JSON.parse(savedSession);
        const now = Date.now();
        
        // Check if session is still valid (e.g., 30 minutes)
        if (now - session.timestamp < 30 * 60 * 1000) {
          setIsVerified(true);
          setSessionToken(session.token);
        } else {
          localStorage.removeItem('turnstile_session');
        }
      } catch {
        localStorage.removeItem('turnstile_session');
      }
    }
  }, []);

  const handleTurnstileVerify = useCallback(async (token: string) => {
    try {
      // Verify token and create session
      const response = await fetch('/api/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ turnstileToken: token }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsVerified(true);
        setSessionToken(result.sessionToken);
        setVerificationError('');
        
        // Save session to localStorage
        localStorage.setItem('turnstile_session', JSON.stringify({
          token: result.sessionToken,
          timestamp: Date.now(),
        }));
      } else {
        setVerificationError(result.error || 'Verification failed');
      }
    } catch {
      setVerificationError('Verification service unavailable');
    }
  }, []);

  const handleSearch = async () => {
    if (!isVerified || !sessionToken) {
      setVerificationError('Please complete verification first');
      return;
    }

    setIsSearching(true);
    setVerificationError('');

    try {
      const response = await fetch('/api/search-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: searchQuery,
          sessionToken,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSearchResults(result.data || []);
        setSearchCount(prev => prev + 1);
      } else {
        if (result.error === 'Session expired') {
          // Session expired, need new verification
          setIsVerified(false);
          setSessionToken('');
          localStorage.removeItem('turnstile_session');
          setVerificationError('Session expired. Please verify again.');
        } else {
          setVerificationError(result.error || 'Search failed');
        }
      }
    } catch {
      setVerificationError('Search service unavailable');
    } finally {
      setIsSearching(false);
    }
  };

  const logout = () => {
    setIsVerified(false);
    setSessionToken('');
    setSearchResults([]);
    setSearchCount(0);
    localStorage.removeItem('turnstile_session');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Session-Based Protected Search</h1>
      
      {!isVerified ? (
        // Show verification form
        <div className="mb-6">
          <div className="bg-yellow-50 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 mb-2">Verification Required</h3>
            <p className="text-yellow-700 text-sm">
              Complete one verification to enable multiple searches for this session.
            </p>
          </div>
          
          <CloudflareTurnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAABjTaSufpzCDM6pN'}
            onVerify={handleTurnstileVerify}
            onError={(error) => setVerificationError(`Verification failed: ${error}`)}
            theme="light"
            size="normal"
          />
          
          {verificationError && (
            <div className="bg-red-100 text-red-800 p-3 rounded mt-4">
              {verificationError}
            </div>
          )}
        </div>
      ) : (
        // Show search interface
        <div>
          <div className="bg-green-50 p-4 rounded mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-green-800">✅ Verified Session Active</h3>
                <p className="text-green-700 text-sm">
                  You can perform multiple searches. Searches performed: {searchCount}
                </p>
              </div>
              <button
                onClick={logout}
                className="text-green-700 hover:text-green-900 text-sm underline"
              >
                End Session
              </button>
            </div>
          </div>

          <div className="mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter search query..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            onClick={handleSearch}
            disabled={isSearching || !searchQuery.trim()}
            className={`w-full py-2 px-4 rounded-md mb-6 ${
              !isSearching && searchQuery.trim()
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isSearching ? 'Searching...' : 'Search'}
          </button>

          {verificationError && (
            <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
              {verificationError}
            </div>
          )}

          {searchResults.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Search Results ({searchResults.length})
              </h2>
              <div className="space-y-2">
                {searchResults.map((result, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded">
                    {JSON.stringify(result)}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
