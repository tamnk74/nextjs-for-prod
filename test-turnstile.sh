#!/bin/bash

# Turnstile Local Testing Script
echo "🧪 Testing Turnstile Implementation Locally"
echo "==========================================="

# Check if dev server is running
if ! curl -s http://localhost:3001 > /dev/null; then
    echo "❌ Development server not running on localhost:3001"
    echo "   Run: npm run dev"
    exit 1
fi

echo "✅ Development server is running"

# Check environment variables
if [ ! -f .env.local ]; then
    echo "❌ .env.local file not found"
    exit 1
fi

SITE_KEY=$(grep NEXT_PUBLIC_TURNSTILE_SITE_KEY .env.local | cut -d'=' -f2)
SECRET_KEY=$(grep TURNSTILE_SECRET_KEY .env.local | cut -d'=' -f2)

if [ -z "$SITE_KEY" ]; then
    echo "❌ NEXT_PUBLIC_TURNSTILE_SITE_KEY not found in .env.local"
    exit 1
fi

if [ -z "$SECRET_KEY" ]; then
    echo "❌ TURNSTILE_SECRET_KEY not found in .env.local"
    exit 1
fi

echo "✅ Environment variables configured"
echo "   Site Key: $SITE_KEY"
echo "   Secret Key: ${SECRET_KEY:0:10}..."

# Test API endpoint accessibility
echo ""
echo "🔍 Testing API endpoints..."

# Test verify endpoint with missing token
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X POST http://localhost:3001/api/verify-turnstile \
  -H "Content-Type: application/json" \
  -d '{}')

if [ "$RESPONSE" = "400" ]; then
    echo "✅ /api/verify-turnstile endpoint responding correctly"
else
    echo "❌ /api/verify-turnstile endpoint not responding as expected (got $RESPONSE)"
fi

# Test test page accessibility
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/en/test-turnstile)

if [ "$RESPONSE" = "200" ]; then
    echo "✅ Test page accessible at /en/test-turnstile"
else
    echo "❌ Test page not accessible (got $RESPONSE)"
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Open: http://localhost:3001/en/test-turnstile"
echo "2. Complete the Turnstile verification"
echo "3. Click 'Test Submit' button"
echo "4. Check that widget resets after 2 seconds"
echo ""
echo "📖 Full testing guide: LOCAL_TESTING_GUIDE.md"
echo ""
echo "🔧 Debug commands (in browser console):"
echo "   TurnstileDebugUtils.checkStatus()"
echo "   TurnstileDebugUtils.resetAllWidgets()"
echo ""
echo "Happy testing! 🚀"
