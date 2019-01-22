import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    "webpack-hot-middleware/client?reload=true",
    path.resolve(__dirname, 'src/index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
    {
      test: /\.js|jsx$/,
      loader: "babel-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [
        "css-loader"
      ]
    },
    {
        test: /\.(jpg|png)$/,
        exclude: /(node_modules[\\\/])/,
        loader: 'file-loader',
        options: {
            limit: 1024,
            name: '[name].[ext]',
            publicPath: 'img/',
            outputPath: 'img/'
        }
    }
    ],
  },
}