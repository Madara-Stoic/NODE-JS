const dns = require('dns');

dns.lookup('gemini.com', (err, addresses, family) => {
    if (err) {
        console.error('--- DIAGNOSTIC ERROR ---');
        console.error('Network Error Detected:', err.message);
        console.log('--- Cannot resolve external domains ---');
        return;
    }
    console.log('--- DIAGNOSTIC SUCCESS ---');
    console.log('google.com resolved to:', addresses);
});
