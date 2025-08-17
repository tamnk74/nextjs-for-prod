import CloudflareTurnstile from '../CloudflareTurnstile';

interface TurnstileElement extends HTMLElement {
  getResponse?: () => string;
  reset?: () => void;
}

// Example usage in a contact form or login form
export default function ExampleForm() {
  const handleTurnstileVerify = (token: string) => {
    console.log('Turnstile verified:', token);
    // Send the token to your backend for verification
  };

  const handleTurnstileError = (error: string) => {
    console.error('Turnstile error:', error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get the Turnstile token before submitting
    const turnstileElement = document.querySelector('.turnstile-widget') as TurnstileElement;
    const token = turnstileElement?.getResponse?.();
    
    if (!token) {
      alert('Please complete the verification');
      return;
    }

    // Submit form with the token
    const formData = {
      // ... your form data
      turnstileToken: token,
    };

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={4}
          required
        />
      </div>

      {/* Cloudflare Turnstile Widget */}
      <div className="mb-4">
        <CloudflareTurnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || 'your-site-key-here'}
          onVerify={handleTurnstileVerify}
          onError={handleTurnstileError}
          theme="auto"
          size="normal"
          className="mb-4"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
