const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    server: ['webpack/hot/poll?1000', './server'],
  },
  watch: true,
  target: 'node',
  devtool: 'sourcemap',
  node: {
    __filename: true,
    __dirname: true,
  },
  externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: { node: 'current' },
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
              ],
              plugins: [
                '@babel/plugin-transform-regenerator',
                ['@babel/plugin-transform-runtime'],
                '@babel/plugin-proposal-class-properties',
                [
                  '@babel/plugin-transform-destructuring',
                  { useBuiltIns: true },
                ],
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { BUILD_TARGET: JSON.stringify('server') },
    }),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
  ],
  output: {
    path: path.join(process.cwd(), 'build/server'),
    filename: 'server.js',
  },
};
