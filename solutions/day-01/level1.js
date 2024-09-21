//1.
const arr = []

//2.
const arr1= Array(5)

//3.
arrlen = arr1.length

//4.
first = arr1[0]
middle = arr1[arrlen / 2]
last = arr1[arrlen - 1]

//5.
const  mixedDataTypes = ["Hello", 25, .50, true, 'a', 12.50]

//6. 
const itCompanies = ['Facebook', 'Google','Microsoft','Apple', 'IBM','Oracle', 'Amazon']

//7.
console.log(itCompanies)

//8.
console.log(itCompanies.length)

//9.
console.log(itCompanies[0]) // First 
console.log(itCompanies[parseInt(itCompanies.length / 2)]) // Middle
console.log(itCompanies[itCompanies.length - 1]) // Last

//10.
itCompanies.forEach(element => {
    console.log(element)
});

//11.
itCompanies.forEach(element => {  
    console.log(element.toUpperCase())
})

//12.
console.log(itCompanies[0] + ', ' +itCompanies[1] + ', ' +itCompanies[2] + ', ' +itCompanies[3] + ', ' +itCompanies[4] + ', ' +itCompanies[5] + ', and ' +itCompanies[6] + ' are big it companies.')

//13.
itCompanies.includes('Google') ? console.log('Company found') : console.log('Company not found')

//14.

//15.
console.log(itCompanies.sort())

//16.
console.log(itCompanies.reverse())

//17.
console.log(itCompanies.slice(2))

//18.
console.log(itCompanies.slice(-3))

//19.
console.log(itCompanies.slice(itCompanies.length / 2))

//20.
itCompanies.shift()
console.log(itCompanies)

//21.
itCompanies.splice(itCompanies.length / 2)
console.log(itCompanies)

//22. 
itCompanies.pop()
console.log(itCompanies)
//23.
console.log(itCompanies.splice())