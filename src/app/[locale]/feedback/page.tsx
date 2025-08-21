'use client';

import { useState } from 'react';
import CloudflareTurnstile from '../../../components/CloudflareTurnstile';
import '../../../utils/turnstile-debug';

export default function FeedbackPage() {
  const [email, setEmail] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [turnstileKey, setTurnstileKey] = useState<number>(0);

  const handleVerify = (token: string) => {
    setToken(token);
    setStatus('✅ Verified successfully! Ready to submit feedback.');
    setError('');
    console.log('Turnstile verified with token:', token);
  };

  const handleError = (error: string) => {
    setError(`Verification error: ${error}`);
    setStatus('');
    setToken('');
    console.error('Turnstile error:', error);
  };

  const handleExpire = () => {
    setStatus('⏰ Verification expired, please verify again');
    setToken('');
    console.log('Turnstile token expired');
  };

  const handleTimeout = () => {
    setStatus('⏱️ Verification timed out, please try again');
    setToken('');
    console.log('Turnstile timed out');
  };

  const resetTurnstile = () => {
    setTurnstileKey(prev => prev + 1);
    setToken('');
    setStatus('🔄 Please complete verification to submit feedback');
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!token) {
      setError('Please complete the verification first');
      return;
    }

    if (!email.trim() || !feedback.trim()) {
      setError('Please fill in both email and feedback fields');
      return;
    }

    setIsSubmitting(true);
    setStatus('🔄 Submitting your feedback...');
    setError('');
    
    try {
      // First verify the Turnstile token
      const verifyResponse = await fetch('/api/verify-turnstile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const verifyResult = await verifyResponse.json();
      
      if (!verifyResult.success) {
        throw new Error(`Verification failed: ${verifyResult.error}`);
      }

      // Then submit the feedback (you can create this API route later)
      const feedbackResponse = await fetch('/api/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          feedback: feedback.trim(),
          timestamp: new Date().toISOString(),
        }),
      });

      if (feedbackResponse.ok) {
        setStatus('✅ Thank you! Your feedback has been submitted successfully.');
        setEmail('');
        setFeedback('');
      } else {
        const result = await feedbackResponse.json();
        throw new Error(result.error || 'Failed to submit feedback');
      }
    } catch (err) {
      setError(`Failed to submit feedback: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setStatus('');
    } finally {
      setIsSubmitting(false);
      
      // Reset Turnstile widget after submission
      setTimeout(() => {
        resetTurnstile();
      }, 2000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            We would like to hear your feedback
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Feedback Content */}
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                Feedback Content <span className="text-red-500">*</span>
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                placeholder="Please share your feedback, suggestions, or comments. We appreciate your input!"
              />
              <div className="text-sm text-gray-500 mt-1">
                {feedback.length} characters
              </div>
            </div>

            {/* Turnstile Widget */}
            <div>
              <div className="flex justify-center p-4 border border-gray-200 rounded-lg bg-gray-50">
                <CloudflareTurnstile
                  key={turnstileKey}
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAABsikdnaw6h7p4c_'}
                  onVerify={handleVerify}
                  onError={handleError}
                  onExpire={handleExpire}
                  onTimeout={handleTimeout}
                  theme="light"
                  size="normal"
                />
              </div>
            </div>

            {/* Status Messages */}
            {status && (
              <div className={`p-4 rounded-lg ${
                status.includes('✅') ? 'bg-green-50 border border-green-200' :
                status.includes('❌') ? 'bg-red-50 border border-red-200' :
                'bg-blue-50 border border-blue-200'
              }`}>
                <p className={
                  status.includes('✅') ? 'text-green-700' :
                  status.includes('❌') ? 'text-red-700' :
                  'text-blue-700'
                }>
                  {status}
                </p>
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!token || isSubmitting || !email.trim() || !feedback.trim()}
              className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-colors ${
                token && !isSubmitting && email.trim() && feedback.trim()
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? '� Submitting Feedback...' : '📤 Submit Feedback'}
            </button>
          </form>

          {/* Reset Button */}
          <div className="mt-4 text-center hidden">
            <button
              onClick={resetTurnstile}
              className="text-sm text-gray-600 hover:text-gray-800 underline"
            >
              Reset Security Verification
            </button>
          </div>

          {/* Debug Info (Development Only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">Debug Info:</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Email: {email || 'Not provided'}</p>
                <p>Feedback Length: {feedback.length} characters</p>
                <p>Token: {token ? 'Verified ✅' : 'Not verified ❌'}</p>
                <p>Can Submit: {token && email.trim() && feedback.trim() ? 'Yes ✅' : 'No ❌'}</p>
                <p>Widget Key: {turnstileKey}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
