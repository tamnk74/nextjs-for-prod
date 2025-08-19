# API Routes Without Locale Prefix - Configuration Summary

## ✅ **Changes Made**

### **1. Updated Middleware (`src/middleware.ts`)**
- API routes (`/api/*`) are now excluded from internationalization
- API routes are processed before intl middleware
- Added separate protection for protected API routes
- All API calls will work without locale prefixes

### **2. Middleware Logic Flow**
```typescript
1. Check if path starts with '/api'
   → If YES: Skip internationalization, handle auth if needed
   → If NO: Apply internationalization (next-intl)

2. For non-API routes: Apply locale prefixes as configured
3. For API routes: Direct access without locale prefixes
```

## 🔧 **Current API Endpoint Structure**

### **✅ Correct API Calls (No Locale Prefix)**
```typescript
// ✅ These work correctly
fetch('/api/verify-turnstile', { ... })
fetch('/api/search', { ... })
fetch('/api/user/profile', { ... })
```

### **❌ Incorrect API Calls (With Locale)**
```typescript
// ❌ These would be wrong
fetch('/en/api/verify-turnstile', { ... })
fetch('/vi/api/search', { ... })
```

## 🛡️ **Protected API Routes**

You can protect specific API routes by adding them to the `isProtectedApiRoute` matcher:

```typescript
const isProtectedApiRoute = createRouteMatcher([
  '/api/protected(.*)',
  '/api/user(.*)',
  '/api/admin(.*)',
  // Add more as needed
]);
```

## 🌍 **Page Routes (With Locale Prefix)**

Regular pages still use locale prefixes as configured:

```typescript
// ✅ Page routes with locale
/en/profile → Protected profile page
/vi/ho-so → Vietnamese profile page
/en/search-with-turnstile → Test page
/vi/search-with-turnstile → Vietnamese test page
```

## 🚀 **Best Practices**

### **1. API Route Naming**
```
/api/auth/*        → Authentication endpoints
/api/public/*      → Public endpoints (no auth required)
/api/protected/*   → Requires authentication
/api/turnstile/*   → Turnstile-related endpoints
```

### **2. Client-Side API Calls**
```typescript
// Always use absolute paths starting with /api
const response = await fetch('/api/endpoint', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

### **3. Error Handling**
```typescript
try {
  const response = await fetch('/api/endpoint');
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const data = await response.json();
} catch (error) {
  console.error('API Error:', error);
}
```

## 🔍 **Testing Your Setup**

### **Test API Routes Work Without Locale:**
```bash
# ✅ These should work
curl https://your-domain.com/api/verify-turnstile
curl https://your-domain.com/api/search

# ❌ These should NOT work (404)
curl https://your-domain.com/en/api/verify-turnstile
curl https://your-domain.com/vi/api/search
```

### **Test Pages Work With Locale:**
```bash
# ✅ These should work
https://your-domain.com/en/test-turnstile
https://your-domain.com/vi/test-turnstile

# ❌ These should redirect to add locale
https://your-domain.com/test-turnstile → /en/test-turnstile
```

## 🎯 **Summary**

Your configuration is now correct:
- ✅ API routes: `/api/*` (no locale prefix)
- ✅ Page routes: `/[locale]/*` (with locale prefix)
- ✅ Middleware handles both correctly
- ✅ Authentication works for both types
- ✅ Existing API calls already follow correct pattern
