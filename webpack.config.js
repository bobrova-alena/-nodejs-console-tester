const appPath = require('./utils/path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const resolveRelativeAppRoot = require('../happy-site/utils/resolvePath').resolveRelativeAppRoot;
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const devMode = process.env.MODE_ENV == 'development';

const config = {
  context: appPath.root,
  output: {
    path: `${appPath.dist}`,
  },
  entry: {
    index: appPath.appTs,
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js'],
  },
  performance: {
    hints: devMode ? false : 'warning',
  },
  target: 'node',
  node: { __dirname: false },
  devtool: 'source-map',
  externals: [nodeExternals()],
  optimization: {
    nodeEnv: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name(module, chunks, cacheGroupKey) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `${packageName.replace('@', '')}.vendor`;
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new NodemonPlugin({
      watch: appPath.dist
    }),
    new ForkTsCheckerWebpackPlugin({
      async: devMode,
      formatter: 'basic',
      eslint: {
        files: resolveRelativeAppRoot('src/**/*.{ts,tsx}'),
      },
    }),
    devMode && new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false,
    }),
  ].filter(Boolean)
};

module.exports = config;