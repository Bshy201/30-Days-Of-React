//1.
import { countries } from './countries.js'
import { webTechs } from './web_tech.js'

//2.
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words)
console.log(words.length)

//3.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)


//4.
countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('Ethiopia')

//5.
if (webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocesser')
} else {
    webTechs.push('Sass')
    console.log(webTechs)
}

//6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = [frontEnd, backEnd]

console.log(fullStack)
  