/* flags

    g - global (find all occurrences)
    i - insensitive (without case sensitive)
    () - groups
    | - or
*/

const { texto } = require('./base');

//const regEx1 = /João/gi;

//console.log(regEx1.test(texto));  // test search in the text

const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}