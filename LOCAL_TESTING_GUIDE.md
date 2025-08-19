# 🧪 Local Testing Guide for Turnstile Implementation

## 🚀 **Current Status**
✅ Development server running at: http://localhost:3001
✅ Environment variables configured
✅ Test page available at: http://localhost:3001/en/test-turnstile

## 🔍 **Testing Steps**

### **1. Basic Functionality Test**
1. **Open test page**: http://localhost:3001/en/test-turnstile
2. **Check widget loads**: You should see the Turnstile challenge widget
3. **Complete verification**: Click the checkbox or solve the challenge
4. **Verify token appears**: Token should display in the gray box below
5. **Test submission**: Click "Test Submit" button
6. **Check auto-reset**: Widget should reset after 2 seconds

### **2. Test Different Scenarios**

#### **✅ Success Flow**
```
1. Complete Turnstile → See green "Verified successfully!"
2. Click "Test Submit" → See blue "Testing verification..."
3. Wait for result → See green "Server verification successful!"
4. Wait 2 seconds → Widget resets automatically
5. Submit count increases
```

#### **❌ Error Flow**
```
1. Click "Test Submit" without verification → Alert: "Please complete verification first"
2. Wait for token to expire → Yellow "Token expired, please verify again"
3. Network error → Red "Network error" message
```

#### **🔄 Reset Flow**
```
1. Complete verification → Get token
2. Click "Reset Turnstile" → Widget resets immediately
3. Status changes to "Please complete verification again"
4. Widget key increments in debug info
```

### **3. Debug Information to Monitor**

Check the debug section at the bottom of the page:
- **Site Key**: Should show your configured key
- **Status**: ✅ Verified or ❌ Not verified
- **Submit Count**: Increments with each successful submission
- **Currently Submitting**: Shows Yes/No during API calls
- **Widget Key**: Increments when widget resets

### **4. Browser Console Testing**

Open browser DevTools (F12) and check:

#### **Console Messages**
```javascript
// Successful verification
"Turnstile verified with token: 0.ABC123..."

// Token expiration
"Turnstile token expired"

// Timeout
"Turnstile timed out"
```

#### **Network Tab**
```
POST /api/verify-turnstile
Content-Type: application/json
Body: {"token":"0.ABC123..."}

Response: {"success":true,"message":"Verification successful"}
```

#### **Debug Commands** (Type in console)
```javascript
// Check Turnstile status
TurnstileDebugUtils.checkStatus()

// Reset all widgets
TurnstileDebugUtils.resetAllWidgets()

// Remove all widgets
TurnstileDebugUtils.removeAllWidgets()

// Reload Turnstile script
TurnstileDebugUtils.reloadScript()
```

### **5. API Endpoint Testing**

#### **Test API Directly with curl**
```bash
# Get a token from the widget first, then test:
curl -X POST http://localhost:3001/api/verify-turnstile \
  -H "Content-Type: application/json" \
  -d '{"token":"YOUR_TOKEN_HERE"}'
```

#### **Expected Responses**
```json
// Success
{"success":true,"message":"Verification successful"}

// Missing token
{"success":false,"error":"Invalid or missing token"}

// Invalid token
{"success":false,"error":"Invalid verification token"}
```

### **6. Multiple Language Testing**

Test in different locales:
- English: http://localhost:3001/en/test-turnstile
- Vietnamese: http://localhost:3001/vi/test-turnstile

### **7. Common Issues & Solutions**

#### **Widget doesn't load**
- Check browser console for errors
- Verify internet connection (Turnstile needs external resources)
- Check if ad blockers are interfering

#### **Error 300030**
- Multiple widgets detected
- Run: `TurnstileDebugUtils.removeAllWidgets()`
- Refresh page

#### **Token always invalid**
- Check secret key in .env.local
- Verify API endpoint is working
- Check network tab for request/response

#### **Widget doesn't reset**
- Check that `key` prop is changing
- Monitor widget key in debug info
- Manually click "Reset Turnstile"

### **8. Performance Testing**

#### **Load Testing**
1. Complete verification multiple times
2. Submit rapidly (should be rate limited)
3. Monitor submit count
4. Check for memory leaks in DevTools

#### **Network Testing**
1. Throttle network in DevTools
2. Test with slow 3G
3. Test offline behavior
4. Test with network interruptions

### **9. Mobile Testing**

Test on mobile devices:
- Responsive design
- Touch interactions
- Mobile-specific challenges
- Different screen sizes

### **10. Production Preparation**

Before deploying:
- [ ] Replace test site key with production key
- [ ] Update secret key for production
- [ ] Test on production domain
- [ ] Set up monitoring/logging
- [ ] Configure rate limiting
- [ ] Test with real traffic

## 🎯 **Quick Checklist**

- [ ] Widget loads correctly
- [ ] Verification works
- [ ] Token appears after verification
- [ ] Submit button enables/disables correctly
- [ ] API call succeeds
- [ ] Widget resets after submission
- [ ] Error handling works
- [ ] Debug info updates correctly
- [ ] Multiple submissions work
- [ ] Manual reset works

## 🆘 **Troubleshooting**

If something doesn't work:
1. Check browser console for errors
2. Verify environment variables
3. Test API endpoint directly
4. Use debug utilities
5. Check network tab in DevTools
6. Try refreshing the page
7. Clear browser cache

## 📞 **Support Commands**

```bash
# Restart dev server
npm run dev

# Check environment
cat .env.local

# View logs
tail -f .next/trace

# Reset everything
rm -rf .next && npm run dev
```
