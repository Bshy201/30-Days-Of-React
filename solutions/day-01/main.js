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
  

//Level 3
//1. 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
let len = ages.length
const min = ages[0]
const max = ages[len -1]
const middle = ages[len / 2] 
const median = middle / 2
let sum = 0
ages.forEach(int => {
  sum += int
})
const average = sum / len
const range = max - min
const value1 = min - average
const value2 = max - average
const difference = Math.abs(value1, value2)
console.log("Min: ", min)
console.log("Max: ", max)
console.log("Median: ", median)
console.log("Average: ", average)
console.log("Range", range)
console.log("Difference", difference)

//2.
const countryLen = countries.length
const middleCountryLen = parseInt(countryLen / 2)
const middleCountry = (countries[parseInt(countryLen / 2)])
console.log( middleCountry) 

//3.
let arr1 = countries.slice(0, middleCountryLen)
let arr2 = countries.slice(middleCountryLen, middleCountryLen + countryLen)

console.log('Array1: ' + arr1 + '\nArray2: ' + arr2)
