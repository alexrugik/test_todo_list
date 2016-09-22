var dependency = [
  'angular',
  'angular-animate',
  'angular-aria',
  'angular-material',
  'angular-messages',
  'angular-ui-router'
];

var appPath = __dirname + '/app';
var publicPath = __dirname + '/web';
var path = require('path');

var Webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WebpackDevServer = require('webpack-dev-server');
var ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {
  context: appPath,
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
    modulesDirectories: ['node_modules', 'test', 'styles', 'app']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
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
      //publicPath: __dirname + 'web/',
      allChunks: true
    })
  ],
  devServer: {
    hot: true,
    contentBase: './web',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    inline: true
  }
}
