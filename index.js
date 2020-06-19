// console.log('Hello World')
import test1 from './test1'
import test2 from './test2'


// console.log(`${test1}, ${test2}`)

import person from './person.jpg'

// * Es necesario configurar el loader -> file-loader en webpack.config

const img = document.createElement('img')
img.src = person
