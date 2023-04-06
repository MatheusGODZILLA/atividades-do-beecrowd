var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines.shift());
let horas = parseInt(lines.shift());
let valorHora = parseFloat(lines.shift());

console.log('NUMBER = ' + numero);
console.log('SALARY = U$ ' + (horas * valorHora).toFixed(2));