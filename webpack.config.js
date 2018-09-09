module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        loader: 'url-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: __dirname +'/dist',
    filename: 'main.js'
  },
  devServer: {
    contentBase: 'dist',
    port: 3000,
  },
};
