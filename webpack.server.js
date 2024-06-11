const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
//   entry: './server/index.js',
  entry: './index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: 'ts-loader'
          },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: 'null-loader'
      }
    //    {
    //     test: /\.css$/,
    //     use: ['style-loader','css-loader']
    //   }
    ]
  },
  mode: 'development'
};
