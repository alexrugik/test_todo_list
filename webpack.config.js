var dependency = [
  'angular',
  'angular-ui-router',
  'jquery',
  'bootstrap'
];

var path = require('path');

var Webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WebpackDevServer = require('webpack-dev-server');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: './app.module',
    vendor: dependency,
  },
  output: {
    path: __dirname + '/web/',
    filename: '[name].budle.js',
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css', '.html'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new Webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
          {
            context: __dirname + '/app/',
            from: '**/*.html',
            to: __dirname + '/web/app/'
          },
          {
            context: __dirname,
            from: 'index.html',
            to: __dirname + '/web/'
          }
        ],
        {
          copyUnmodified: false
        }),
    new ExtractTextPlugin('styles.bundle.css', {
      allChunks: true
    }),
    new Webpack.ProvidePlugin({
      "jQuery": "jquery"
    })
  ],
  devServer: {
    contentBase: './web',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    inline: true,
    historyApiFallback: true
  }
}
