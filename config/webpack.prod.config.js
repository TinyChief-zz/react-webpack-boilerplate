/* eslint-disable */
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack');
// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// Configs
const baseConfig = require('./webpack.base.config')

const APP_DIR = path.resolve(__dirname, '../src'); 

const prodConfiguration = env => {
  return merge([
    {
      optimization: {
        // runtimeChunk: 'single',
        // splitChunks: {
        //   cacheGroups: {
        //     vendor: {
        //       test: /[\\/]node_modules[\\/]/,
        //       name: 'vendors',
        //       chunks: 'all'
        //     }
        //   }
        // },
        minimizer: [new UglifyJsPlugin()],
      },
      plugins: [
        new CleanWebpackPlugin(['dist'], {
          root: path.join(__dirname, '..')
        }),
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin(),
        new Visualizer({ filename: './statistics.html' }),
      ],
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist'),
      },
    },
  ])
}


module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env))
}
