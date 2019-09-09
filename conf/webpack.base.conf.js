const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
};

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.src,
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }, {
        test: /\.(eot|otf|ttf|svg|woff)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: 'postcss.config.js' } },
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      }, {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: 'postcss.config.js' } },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.pug`,
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/sort-rooms.pug`,
      filename: './sort-rooms.html',
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/room-details.pug`,
      filename: './room-details.html',
    }),

    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/link-mock.pug`,
      filename: './link-mock.html',
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/components/**/img/*`, to: `${PATHS.assets}img/[name].[ext]` },
      { from: `${PATHS.src}/img/*`, to: `${PATHS.assets}img/[name].[ext]` },
      { from: `${PATHS.src}/img/favicons`, to: `${PATHS.assets}img/favicons` },
      { from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts` },
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};
