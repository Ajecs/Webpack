const path = require('path')
// Para obtener un path absoluto y asi crear el tipo de salida de webpack

var htmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/js/index.js',
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, '../', 'bundle'),
  },
  module: {
    rules: [
      {
        /*
         * Las reglas de webpack para gestionar los modulos necesitan de regexp que
         * indique el archivo a ser gestionado por 1 o + loaders
         */
        test: /\.jpg$/,
        use: {
          loader: 'url-loader',
          // Opciones del loader para evitar cargar una img muy grande como base-64
          // en caso de ser mayor a 1000kb actua file-loader
          options: {
            limit: 1000,
          },
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
    title: 'Webpack desde cero',
    template: './src/index.html',
  })],
  // Se debe instanciar un objeto del plugin
}

module.exports = config