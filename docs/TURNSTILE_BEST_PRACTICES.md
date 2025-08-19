# Cloudflare Turnstile Best Practices

## 🔐 Token Validation Rules

### **Critical Facts:**
- ✅ **One-time use**: Each token can only be verified ONCE
- ✅ **Short lifespan**: Tokens expire in ~5 minutes
- ❌ **NO caching**: Never store/cache tokens
- ❌ **NO reuse**: Cannot use same token multiple times
- ✅ **Server-side only**: Always verify on backend

## 🔄 Proper Validation Flow

```
1. User completes Turnstile → Gets fresh token
2. Frontend submits form + token to backend
3. Backend immediately verifies token with Cloudflare API
4. Token becomes invalid (whether verification succeeds/fails)
5. If user resubmits → Must complete Turnstile again
```

## ⚠️ Common Mistakes to Avoid

### **❌ DON'T:**
- Cache tokens anywhere (memory, localStorage, database)
- Reuse tokens for multiple requests
- Store tokens longer than needed for single submission
- Skip server-side verification
- Ignore error codes from Cloudflare

### **✅ DO:**
- Generate fresh token for each form submission
- Verify immediately upon receiving token
- Reset Turnstile widget after failed submissions
- Handle all error scenarios gracefully
- Log verification attempts for monitoring

## 🛡️ Security Best Practices

### **1. Server-Side Verification**
```typescript
// Always verify on your backend
const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY,
    response: token,
    remoteip: clientIP, // Include for better security
  }),
});
```

### **2. Include Client IP**
```typescript
// Get client IP for additional validation
const clientIP = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                '127.0.0.1';
```

### **3. Proper Error Handling**
```typescript
// Map Cloudflare error codes to user-friendly messages
const errorMessages = {
  'timeout-or-duplicate': 'Token expired or already used',
  'invalid-input-response': 'Invalid verification token',
  // ... other mappings
};
```

## 📝 Implementation Examples

### **Frontend Form Component**
```tsx
const { submitWithTurnstile, handleTurnstileVerify } = useTurnstileForm({
  onSuccess: () => alert('Success!'),
  resetOnError: true, // Reset widget on submission errors
});

const handleSubmit = async (e) => {
  e.preventDefault();
  await submitWithTurnstile(formData, async (data, token) => {
    // Your submission logic here
    await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify({ ...data, turnstileToken: token }),
    });
  });
};
```

### **Backend API Route**
```typescript
export async function POST(request: NextRequest) {
  const { formData, turnstileToken } = await request.json();
  
  // 1. Verify Turnstile token first
  const verification = await verifyTurnstileToken(turnstileToken);
  if (!verification.success) {
    return NextResponse.json({ error: 'Verification failed' }, { status: 400 });
  }
  
  // 2. Process form data only after verification
  await processFormData(formData);
  
  return NextResponse.json({ success: true });
}
```

## 🔍 Error Code Reference

| Error Code | Meaning | Action |
|------------|---------|---------|
| `timeout-or-duplicate` | Token expired or already used | Reset widget, get new token |
| `invalid-input-response` | Invalid token format | Check token generation |
| `missing-input-response` | No token provided | Ensure token is sent |
| `invalid-input-secret` | Wrong secret key | Check environment variables |
| `bad-request` | Malformed request | Check API call format |

## 📊 Monitoring and Logging

### **What to Log:**
```typescript
// Success cases
console.log('Turnstile verification successful', {
  hostname: result.hostname,
  challenge_ts: result.challenge_ts,
  clientIP: clientIP.slice(0, 8) + '***', // Partial IP for privacy
});

// Failure cases
console.warn('Turnstile verification failed', {
  errorCodes: result['error-codes'],
  clientIP: clientIP.slice(0, 8) + '***',
});
```

### **Metrics to Track:**
- Verification success rate
- Common error codes
- Token expiration frequency
- Failed submission attempts

## 🚀 Production Checklist

- [ ] Secret key properly configured in environment
- [ ] Site key matches your domain
- [ ] Client IP included in verification
- [ ] Error handling for all scenarios
- [ ] Logging and monitoring in place
- [ ] Rate limiting on verification endpoint
- [ ] HTTPS enforced for all requests
- [ ] Proper CORS configuration

## 🔧 Troubleshooting

### **Token Already Used:**
- User hit submit button multiple times
- Form was resubmitted without new verification
- **Solution**: Reset Turnstile widget after any submission attempt

### **Token Expired:**
- User took too long to submit form
- **Solution**: Show clear expiration message, reset widget

### **Verification Always Fails:**
- Wrong secret key
- Domain mismatch between site key and current domain
- **Solution**: Check Cloudflare dashboard configuration
