const path = require('path')
// Para obtener un path absoluto y asi crear el tipo de salida de webpack

const HTMLWebpackPlugin = require('html-webpack-plugin'),
  miniCssExtractPlugin = require('mini-css-extract-plugin') 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const config = {
  entry: './src/js/index.js',
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, '../', 'bundle'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // sin style-loader para no inyectar css al DOM, sino utilizando  el loader del plugin
        // use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
    plugins: [
      new MiniCssExtractPlugin() ,
      new HTMLWebpackPlugin({
        title: 'Webpack desde cero',
        template: './src/index.html',
      }),
    ],
    // Se debe instanciar un objeto del plugin
  }

module.exports = config
