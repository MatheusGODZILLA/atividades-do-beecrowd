//-- Versão para o BeeCRowd --//
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distancia = parseInt(lines.shift("Informe a distância em km:"));
let tempo = distancia * 2;
console.log(`${tempo} minutos`);