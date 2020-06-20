import test1 from './test1.js'
import test2 from './test2.js'
import person from '../img/person.jpg'

// * Es necesario configurar el loader -> file-loader en webpack.config

const img = document.createElement('img')
img.src = person

document.body.append(img)

console.log(`${test1}, ${test2}`)