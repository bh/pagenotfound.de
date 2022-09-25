const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPreact = require('next-plugin-preact')

module.exports = withPreact(
  withBundleAnalyzer({
    output: 'standalone',

    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
    },
    webpack: (config, { dev, isServer }) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
  })
)
