// Utility functions to help debug and reset Turnstile widgets
// You can run these in the browser console if needed

export const TurnstileDebugUtils = {
  // Reset all Turnstile widgets on the page
  resetAllWidgets: () => {
    if (window.turnstile) {
      try {
        window.turnstile.reset();
        console.log('All Turnstile widgets reset successfully');
      } catch (error) {
        console.error('Error resetting Turnstile widgets:', error);
      }
    } else {
      console.error('Turnstile not loaded');
    }
  },

  // Remove all Turnstile widgets from the page
  removeAllWidgets: () => {
    const widgets = document.querySelectorAll(
      '.cf-turnstile, .turnstile-widget',
    );
    widgets.forEach((widget, index) => {
      try {
        if (window.turnstile) {
          window.turnstile.remove();
        }
        widget.remove();
        console.log(`Removed widget ${index + 1}`);
      } catch (error) {
        console.error(`Error removing widget ${index + 1}:`, error);
      }
    });
  },

  // Check Turnstile status
  checkStatus: () => {
    console.log('Turnstile loaded:', !!window.turnstile);
    console.log(
      'Turnstile widgets found:',
      document.querySelectorAll('.cf-turnstile, .turnstile-widget').length,
    );

    if (window.turnstile) {
      console.log('Turnstile object:', window.turnstile);
    }
  },

  // Force reload Turnstile script
  reloadScript: () => {
    // Remove existing script
    const existingScript = document.querySelector('script[src*="turnstile"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new script
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log('Turnstile script reloaded successfully');
    };
    script.onerror = () => {
      console.error('Failed to reload Turnstile script');
    };
    document.head.appendChild(script);
  },
};

// Make it available globally for console debugging
if (typeof window !== 'undefined') {
  (
    window as typeof window & {
      TurnstileDebugUtils: typeof TurnstileDebugUtils;
    }
  ).TurnstileDebugUtils = TurnstileDebugUtils;
}

// Console commands you can run:
console.log(`
🔧 Turnstile Debug Utils Available:

In browser console, you can run:
- TurnstileDebugUtils.resetAllWidgets()    // Reset all widgets
- TurnstileDebugUtils.removeAllWidgets()   // Remove all widgets
- TurnstileDebugUtils.checkStatus()        // Check current status
- TurnstileDebugUtils.reloadScript()       // Reload Turnstile script

Common Error 300030 Solutions:
1. Multiple widgets with same sitekey - use removeAllWidgets() then refresh
2. Widget created before script loaded - use reloadScript()
3. Invalid sitekey - check your Cloudflare dashboard
4. Rate limiting - wait a few minutes before retrying
`);
