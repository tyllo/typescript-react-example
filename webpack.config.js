'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: './dist/bundle.js',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    resolve: {
      root: [
        path.resolve('.'),
        path.resolve('./bower_components/'),
        path.resolve('./node_modules/'),
      ],
    },
  },

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript', exclude: /node_modules/ },
    ],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.tsx?$/, loader: 'tslint', exclude: /node_modules/ },
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
