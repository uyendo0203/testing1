// next.config.js

// You can choose which headers to add to the list
// after learning more below.
const securityHeaders = []

module.exports = {
  source: '/:path*',
  headers: securityHeaders,
  images: {
    domains: [process.env.DOMAIN_API]
  },
  env: {
    customKey: 'my-value',
  },
}