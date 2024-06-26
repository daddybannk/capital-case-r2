const path = require('path');

module.exports = {
  mode: 'production', // or 'development'
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module'
    },
    environment: {
      module: true
    }
  },
  experiments: {
    outputModule: true
  }
};
