'use client';

import { useState, useCallback } from 'react';
import CloudflareTurnstile from '../../../components/CloudflareTurnstile';

export default function SearchPageWithTurnstile() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<unknown[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [turnstileError, setTurnstileError] = useState<string>('');
  const [turnstileKey, setTurnstileKey] = useState(0); // Force re-render of Turnstile

  // Handle Turnstile verification
  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
    setTurnstileError('');
  }, []);

  const handleTurnstileError = useCallback((error: string) => {
    setTurnstileToken('');
    setTurnstileError(`Verification failed: ${error}`);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken('');
    setTurnstileError('Please verify again to continue searching');
  }, []);

  // Reset Turnstile widget - forces new verification
  const resetTurnstile = useCallback(() => {
    setTurnstileToken('');
    setTurnstileError('');
    setTurnstileKey(prev => prev + 1); // This will force component re-render
  }, []);

  // Search function that requires fresh token each time
  const handleSearch = async () => {
    // Check if we have a valid token
    if (!turnstileToken) {
      setTurnstileError('Please complete verification before searching');
      return;
    }

    setIsSearching(true);
    setTurnstileError('');

    try {
      // Make API call with current token
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: searchQuery,
          turnstileToken, // Include token with request
        }),
      });

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const results = await response.json();
      setSearchResults(results.data || []);

      // IMPORTANT: Reset Turnstile after successful API call
      // User needs new verification for next search
      resetTurnstile();

    } catch (error) {
      setTurnstileError(error instanceof Error ? error.message : 'Search failed');
      // Reset Turnstile on error too
      resetTurnstile();
    } finally {
      setIsSearching(false);
    }
  };

  // Check if search is allowed
  const canSearch = turnstileToken && !isSearching && searchQuery.trim();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Protected Search</h1>
      
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter search query..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Turnstile Widget - key prop forces re-render */}
      <div className="mb-4">
        <CloudflareTurnstile
          key={turnstileKey} // This forces new widget on reset
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAABjTaSufpzCDM6pN'}
          onVerify={handleTurnstileVerify}
          onError={handleTurnstileError}
          onExpire={handleTurnstileExpire}
          theme="light"
          size="normal"
        />
      </div>

      {/* Error Display */}
      {turnstileError && (
        <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
          {turnstileError}
        </div>
      )}

      {/* Search Button */}
      <button
        onClick={handleSearch}
        disabled={!canSearch}
        className={`w-full py-2 px-4 rounded-md mb-6 ${
          canSearch
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isSearching ? 'Searching...' : 'Search'}
      </button>

      {/* Instructions */}
      <div className="bg-blue-50 p-4 rounded mb-6">
        <h3 className="font-semibold text-blue-800 mb-2">How it works:</h3>
        <ul className="text-blue-700 space-y-1 text-sm">
          <li>• Complete verification before each search</li>
          <li>• After each search, you need to verify again</li>
          <li>• This prevents automated/bot searches</li>
          <li>• Each token can only be used once</li>
        </ul>
      </div>

      {/* Search Results */}
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

      {/* Status */}
      <div className="mt-6 text-sm text-gray-600">
        <p>Verification Status: {turnstileToken ? '✅ Verified' : '❌ Not verified'}</p>
        <p>Can Search: {canSearch ? '✅ Yes' : '❌ No'}</p>
      </div>
    </div>
  );
}
