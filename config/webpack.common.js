const path = require('path')
// Para obtener un path absoluto y asi crear el tipo de salida de webpack

const HTMLWebpackPlugin = require('html-webpack-plugin'),
  miniCssExtractPlugin = require('mini-css-extract-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  entry: './src/js/index.js',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, '../', 'bundle'),
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      // * Esto permite el uso de la version completa (con compilador) de Vue
      // Que es instalada como dependencia de desarrollo para ser procesada luego por webpack
      // Otorgando mas opciones como caching, code-splitting ...
    },
  },
  optimization: {
    // * Permite el uso de code-splittin a partir del plugin preinstalado 
    splitChunks: {
      chunks: 'all',
    },
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
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      title: 'Webpack desde cero',
      template: './src/index.html',
    }),
  ],
  // Se debe instanciar un objeto del plugin
}

module.exports = config
