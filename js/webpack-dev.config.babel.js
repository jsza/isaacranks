import path from 'path'
import webpack from 'webpack'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'


export default
  { devtool: 'cheap-module-eval-source-map'
  , entry:
    [ path.resolve(__dirname)
    ]
  , output:
    { path: path.resolve(__dirname, '..', 'static', 'js')
    , filename: 'bundle.js'
    , publicPath: 'http://localhost:3002/'
    }
  , plugins:
    [ new webpack.NoEmitOnErrorsPlugin()
    , new webpack.DefinePlugin(
      { __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
      , __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
      })
    , new webpack.ProvidePlugin(
      { 'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch' })
    , new webpack.HotModuleReplacementPlugin()
    , new ReactRefreshWebpackPlugin()
    ]
  , module:
    { rules:
      [ { test: /\.js$/
        , loader: 'babel-loader'
        , exclude: /node_modules/
        , include: __dirname
        }
      , { test: /\.scss$/
        , exclude: /node_modules/
        , use: ['style-loader', 'css-loader', 'sass-loader']
        }
      // , { test: /\.ttf$/
      //   , exclude: /node_modules/
      //   , use:
      //     [ { loader: 'ttf-loader'
      //       , options:
      //         { name: './font/[hash].[ext]',
      //         }
      //       }
      //     ]
      //   }
      ]

    }
  , devServer:
    { host: 'localhost'
    , port: 3002
    , contentBase: path.resolve(__dirname, '..', 'static')
    , contentBasePublicPath: '/static'
    , headers:
      { 'Access-Control-Allow-Origin': '*'
      , 'Vary': 'Accept'
      }
    , hot: true
    // , inline: true
    , historyApiFallback: true
    , proxy:
      { '/':
        // { target: 'https://tempus.xyz/'
        { target: 'https://test.isaacranks.com/'
        , secure: true
        , changeOrigin: true
        , logLevel: 'debug'
        , bypass: (req, res, proxyOptions) => {
            if (req.headers.accept == 'application/json') {
              return null
            }
            else if (req.path.startsWith('/static')) {
              return req.path
            }
            else {
              return '/static/index.html'
            }
          }
        }
      }
    }
  }


// export default function(env) {
//     return (
//     { entry: path.resolve(__dirname)
//     , output:
//       { path: path.resolve(__dirname, '..', 'static', 'js')
//       , filename: 'bundle.js'
//       }
//     , devtool: env == 'production' ? 'source-map' : 'cheap-module-eval-source-map'
//     , plugins:
//       [ new webpack.ProvidePlugin(
//           { 'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch' })
//       ]
//     , module:
//       { rules:
//         [ { test: /\.js$/
//           , loader: 'babel-loader'
//           , exclude: /node_modules/
//           , include: __dirname
//         }
//         ]
//       }
//     });
// }
