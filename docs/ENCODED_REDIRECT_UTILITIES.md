# Encoded Redirect Utilities

This module provides utilities for handling redirects with encoded messages in URL parameters, commonly used for authentication flows and user feedback.

## Features

- **Encoded Redirects**: Safely encode messages in URL parameters
- **Message Decoding**: Extract and decode messages from URL parameters  
- **React Hooks**: Easy-to-use hooks for React components
- **UI Components**: Pre-built components for displaying messages
- **TypeScript Support**: Full type safety and IntelliSense

## Usage

### Server-Side Redirects

```typescript
import { redirectWithError, redirectWithSuccess, encodedRedirect } from '@/shared/utils/auth';

// Convenience functions for common message types
return redirectWithError('/login', 'Invalid credentials');
return redirectWithSuccess('/dashboard', 'Welcome back!');

// Or use the generic function
return encodedRedirect('warning', '/profile', 'Please update your profile');
```

### Client-Side Message Display

#### Using React Hooks

```typescript
import { useRedirectMessages, useRedirectMessage } from '@/shared/hooks/useRedirectMessages';

function LoginPage() {
  const messages = useRedirectMessages();
  const errorMessage = useRedirectMessage('error');
  
  return (
    <div>
      {errorMessage && (
        <div className="alert alert-error">
          {errorMessage}
        </div>
      )}
      {/* Your login form */}
    </div>
  );
}
```

#### Using the MessageDisplay Component

```typescript
import { MessageDisplay } from '@/shared/ui/MessageDisplay';

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MessageDisplay 
        autoDismiss={5000} 
        showCloseButton={true}
        className="mb-6"
      />
      {children}
    </div>
  );
}
```

### Manual Message Decoding

```typescript
import { getErrorMessage, getAllMessages } from '@/shared/utils/auth';

// In a server component or API route
function ServerComponent({ searchParams }: { searchParams: URLSearchParams }) {
  const errorMessage = getErrorMessage(searchParams);
  const allMessages = getAllMessages(searchParams);
  
  return (
    <div>
      {errorMessage && <p>Error: {errorMessage}</p>}
    </div>
  );
}
```

## Message Types

The utilities support four message types:

- **error**: For error messages (red styling)
- **success**: For success messages (green styling)  
- **info**: For informational messages (blue styling)
- **warning**: For warning messages (yellow styling)

## URL Format

Messages are encoded as URL query parameters:

```
/login?error=Invalid%20credentials
/dashboard?success=Welcome%20back!
/profile?warning=Please%20update%20your%20profile
```

## Examples

### Authentication Flow

```typescript
// login-form/model.ts
import { redirectWithError } from '@/shared/utils/auth';

export const signInAction = async (formData: FormData) => {
  // ... authentication logic
  
  if (error) {
    return redirectWithError('/sign-in', error.message);
  }
  
  return redirect('/protected');
};
```

```typescript
// sign-in/page.tsx
import { MessageDisplay } from '@/shared/ui/MessageDisplay';

export default function SignInPage() {
  return (
    <div>
      <MessageDisplay />
      <LoginForm />
    </div>
  );
}
```

### Form Submission

```typescript
// API route
import { redirectWithSuccess } from '@/shared/utils/auth';

export async function POST(request: Request) {
  // ... form processing
  
  if (success) {
    return redirectWithSuccess('/thank-you', 'Form submitted successfully!');
  }
}
```

## Customization

The `MessageDisplay` component can be customized with:

- **autoDismiss**: Time in milliseconds before auto-dismissing (0 = no auto-dismiss)
- **showCloseButton**: Whether to show manual close buttons
- **className**: Custom CSS classes for styling

```typescript
<MessageDisplay 
  autoDismiss={10000}  // 10 seconds
  showCloseButton={false}
  className="fixed top-4 right-4 z-50 max-w-md"
/>
```
