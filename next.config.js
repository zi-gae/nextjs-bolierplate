const withTM = require('next-transpile-modules')
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally')

const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
const transpileModules = []

const nextConfig = {
  env: {},
  publicRuntimeConfig: {
    isProd,
    isDev,
    domain: process.env.DOMAIN,
    apiServer: process.env.API_SERVER,
    sinsaSever: process.env.SINSA_SERVER,
    lamdaServer: process.env.LAMBDA_SERVER,
    seokchonServer: process.env.SEOKCHON_SERVER,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        new MergeIntoSingleFilePlugin({
          files: {
            [`static/${buildId}/libs.js`]: ['src/libs/*.js'],
          },
        }),
      ],
    }
  },
}
module.exports = withTM(transpileModules)(nextConfig)
