const { texto } = require('./base');

const regExp1 = /João|Maria/gi;

/*
console.log(texto)
console.log(texto.match(regExp1))
console.log(texto.replace(/(João|Maria)/gi, '<b>$1</b>'))  //$+num -- index of groups
*/

console.log(texto.replace(/(João|Maria)/gi, function(input) {
    return '### ' + input.toUpperCase() + ' ###'
}))