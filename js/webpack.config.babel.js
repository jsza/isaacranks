import path from 'path'
import webpack from 'webpack'


export default function(env) {
    return (
    { entry: path.resolve(__dirname)
    , output:
      { path: path.resolve(__dirname, '..', 'static', 'js')
      , filename: 'bundle.js'
      }
    , resolve:
      { alias:
        { isaacranks: path.join(__dirname, '..', 'src')
        }
      }
    , devtool: env == 'production' ? 'source-map' : 'cheap-module-eval-source-map'
    , plugins:
      [ new webpack.ProvidePlugin(
          { 'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch' })
      ]
    , module:
      { rules:
        [ { test: /\.js$/
          , loader: 'babel-loader'
          , exclude: /node_modules/
          , include: __dirname
        }
        ]
      }
    });
}
