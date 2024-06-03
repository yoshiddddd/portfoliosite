const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',
  mode: 'development', // or 'production'
  module: {
    rules: [
      {
        // test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
           presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-bundle.js'
  },
  target: 'node',
  externals: [nodeExternals()]
};
