const webpackMerge = require('webpack-merge')
const commonConfig = require('./config/webpack.common') 



module.exports = (env, argv) => {
  console.log(argv)
  // se puede escuchar los objetos env-> su status ej. o argv que ofrece datos del modo de desarrollo del proyecto
  const mode = argv.mode ? argv.mode : 'production'
  const modeConfig = require(`./config/webpack.${mode}`)
  // Se obtiene production o development
  return webpackMerge(commonConfig, modeConfig)
  // * se obtiene la unión de las dos configuraciones
}
