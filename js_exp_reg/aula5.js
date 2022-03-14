const { alfabeto } = require('./base')

// [abc] -> Conjunto
// [^] -> Negação

//Range [0-9]

console.log(alfabeto)
console.log(alfabeto.match(/[0-9]/g))
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g))