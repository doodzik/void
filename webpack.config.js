var webpack = require('webpack')

module.exports = {
  entry: __dirname + '/client.jsx',
  output: {
    path: __dirname + '/public/assets',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: [/.jsx?$/, /.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          optional: ['es7.functionBind', 'es7.classProperties', 'es7.decorators']
        }
      },
      {
        test: /.json$/,
        loader: 'json'
      },
      {
        test: /.styl$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader'
      },
      {
        test: /.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
