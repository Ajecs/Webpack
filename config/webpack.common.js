const path = require('path')
// Para obtener un path absoluto y asi crear el tipo de salida de webpack

const HTMLWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  entry: './src/js/main.js',
  output: {
    filename: '[name].[hash].bundle.js',
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
  mode: 'development',
  devServer: {
    contentBase: './bundle',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // ! Excluye lo archivos js de node_modules por parte de babel
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true,
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      title: 'Webpack desde cero',
      template: './src/index.html',
    }),
  ],
  // Se debe instanciar un objeto del plugin
}

module.exports = config
