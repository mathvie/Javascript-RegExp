//quantifiers
const { texto, arquivos } = require('./base');

/*
    * (opcional) - 0 or n times
    + (obligate) - 1 or n
    ? (opcional) - 0 or 1
    \ - Escape character
    {n, m } - n number of times (minimun), m of max times (n and m can be empty representing 0, or a number specific like {3})
*/


/*
console.log(texto)
const regExp1 = /Jo+ão/gi
console.log(texto.match(regExp1))
*/

const regExp2 = /\.jpe{0,1}g/gi
for (const arquivo of arquivos){

    const validate = arquivo.match(regExp2)

    //if(!validate) continue
    console.log(arquivo, arquivo.match(regExp2))
}