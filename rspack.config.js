// @ts-check
const { defineConfig } = require('@rspack/cli')
const { config } = require('dotenv')
const { parsed } = config({ path: process.env.ENV_FILE })

const configRoot = defineConfig(() => {
  const { PUBLIC_PATH, PORT, ENVIRONMENT } = parsed
  const isLocal = ENVIRONMENT === 'LOCAL'
  const mode = isLocal ? 'development' : 'production'

  return {
    mode,
    entry: './src/ui/index.tsx',
    devtool: isLocal ? 'eval-source-map' : false,
    output: {
      clean: isLocal,
      chunkFilename: isLocal ? '[name].js' : '[name].[contenthash:8].js',
      publicPath: `${PUBLIC_PATH}/`
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
          use: [{ loader: '@svgr/webpack', options: { exportType: 'named' } }]
        }
      ]
    },
    builtins: {
      define: {
        targets: ['es2022'],
        'process.env': parsed
      },
      html: [
        {
          template: './public/index.html',
          favicon: './public/favicon.png',
          minify: !isLocal
        }
      ],
      react: {
        refresh: isLocal
      }
    },
    target: 'web'
  }
})

module.exports = configRoot
