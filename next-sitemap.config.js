const siteMetadata = require('./data/siteMetadata.js')

const globalExcludedPaths = ['/datenschutz', '/impressum']

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
  exclude: globalExcludedPaths,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: globalExcludedPaths,
      },
    ],
  },
}
