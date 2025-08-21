'use client';

import { useState } from 'react';
import CloudflareTurnstile from '../../../components/CloudflareTurnstile';
import '../../../utils/turnstile-debug';

export default function TurnstileTestPage() {
  const [token, setToken] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitCount, setSubmitCount] = useState<number>(0);
  const [turnstileKey, setTurnstileKey] = useState<number>(0); // Force re-render of Turnstile

  const handleVerify = (token: string) => {
    setToken(token);
    setStatus('✅ Verified successfully! Ready to submit.');
    setError('');
    console.log('Turnstile verified with token:', token);
  };

  const handleError = (error: string) => {
    setError(`Error: ${error}`);
    setStatus('');
    setToken('');
    console.error('Turnstile error:', error);
  };

  const handleExpire = () => {
    setStatus('⏰ Token expired, please verify again');
    setToken('');
    console.log('Turnstile token expired');
  };

  const handleTimeout = () => {
    setStatus('⏱️ Verification timed out, please try again');
    setToken('');
    console.log('Turnstile timed out');
  };

  // Reset Turnstile widget to generate new token
  const resetTurnstile = () => {
    setTurnstileKey(prev => prev + 1); // Force component re-render
    setToken('');
    setStatus('🔄 Please complete verification again');
    setError('');
  };

  const testSubmit = async () => {
    if (!token) {
      alert('Please complete the verification first');
      return;
    }

    setIsSubmitting(true);
    setStatus('🔄 Testing verification...');
    
    try {
      const response = await fetch('/api/verify-turnstile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('✅ Server verification successful!');
        setSubmitCount(prev => prev + 1);
      } else {
        setStatus(`❌ Server verification failed: ${result.error}`);
      }
    } catch (err) {
      setStatus(`❌ Network error: ${err}`);
    } finally {
      setIsSubmitting(false);
      
      // Reset Turnstile widget after submission (success or failure)
      // Token is now invalid and user needs to verify again
      setTimeout(() => {
        resetTurnstile();
      }, 200); // Wait 2 seconds to show result, then reset
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Turnstile Test Page
        </h1>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Test Form
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          />
          
          {/* Turnstile Widget */}
          <div className="mb-4">
            <CloudflareTurnstile
              key={turnstileKey} // Force re-render when key changes
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAABsikdnaw6h7p4c_'}
              onVerify={handleVerify}
              onError={handleError}
              onExpire={handleExpire}
              onTimeout={handleTimeout}
              theme="light"
              size="normal"
            />
          </div>

          {/* Status Display */}
          {status && (
            <div className={`p-3 rounded mb-4 ${
              status.includes('✅') ? 'bg-green-100 text-green-800' :
              status.includes('❌') ? 'bg-red-100 text-red-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {status}
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
              {error}
            </div>
          )}

          {token && (
            <div className="bg-gray-100 p-3 rounded mb-4">
              <strong>Token:</strong>
              <div className="text-xs break-all mt-1 font-mono">
                {token}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <button
              onClick={testSubmit}
              disabled={!token || isSubmitting}
              className={`w-full py-2 px-4 rounded-md ${
                token && !isSubmitting
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? '🔄 Submitting...' : 'Test Submit'}
            </button>
            
            <button
              onClick={resetTurnstile}
              className="w-full py-2 px-4 rounded-md bg-gray-500 text-white hover:bg-gray-600"
            >
              🔄 Reset Turnstile
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <h3 className="font-semibold mb-2">Debug Info:</h3>
          <ul className="space-y-1">
            <li>Site Key: {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAABsikdnaw6h7p4c_'}</li>
            <li>Theme: Light</li>
            <li>Size: Normal</li>
            <li>Status: {token ? '✅ Verified' : '❌ Not verified'}</li>
            <li>Submit Count: {submitCount}</li>
            <li>Currently Submitting: {isSubmitting ? 'Yes' : 'No'}</li>
            <li>Widget Key: {turnstileKey}</li>
          </ul>
          
          <div className="mt-4 p-3 bg-blue-50 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">How it works:</h4>
            <ul className="text-blue-700 space-y-1 text-xs">
              <li>• Complete verification → Get token</li>
              <li>• Submit form → Token becomes invalid</li>
              <li>• Widget auto-resets after 2 seconds</li>
              <li>• Verify again for next submission</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
