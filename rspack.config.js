// @ts-check
const { defineConfig } = require('@rspack/cli')
const { config } = require('dotenv')

const configRoot = defineConfig((env, argv) => {
  const { parsed } = config({
    path: argv.dotenv
  })
  const { PUBLIC_PATH, PORT, ENVIRONMENT } = parsed
  const isLocal = ENVIRONMENT === 'LOCAL'
  const mode = isLocal ? 'development' : 'production'

  return {
    mode,
    entry: './src/main/index.tsx',
    devtool: isLocal ? 'eval-source-map' : false,
    output: {
      clean: true,
      publicPath: `${PUBLIC_PATH}/`,
      chunkFilename: isLocal ? '[name][ext]' : '[name].[contenthash:8][ext]',
      chunkLoadingGlobal: 'rspackChunkLoadCustomConfig',
      crossOriginLoading: 'anonymous'
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all'
      }
    },
    resolve: {
      modules: ['src', 'node_modules']
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*'
      },
      port: PORT,
      historyApiFallback: true,
      open: true
    },
    module: {
      rules: [
        {
          test: /\.(webp|png|jpe?g|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /^BUILD_ID$/,
          type: 'asset/source'
        },
        {
          test: /\.svg$/i,
          issuer: /\.tsx?$/,
          use: ['@svgr/webpack']
        }
      ]
    },
    builtins: {
      define: {
        targets: ['es2022'],
        'process.env': JSON.stringify(parsed)
      },
      html: [
        {
          template: './public/index.html',
          favicon: './public/favicon.png'
        }
      ]
    },
    target: 'web'
  }
})

module.exports = configRoot
