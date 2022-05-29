const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


const withPreact = require('next-plugin-preact');


module.exports = withPreact(withBundleAnalyzer({
 // experimental: {
   // images: { allowFutureImage: true }
   //   },









  output: 'standalone',
//  experimental: {
//    outputStandalone: true,
//},
//  experimental: {
//    images: {
 //     unoptimized: true,
 //   },
 // },

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
}))
