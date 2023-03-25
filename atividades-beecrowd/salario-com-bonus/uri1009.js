//-- Versão para o BeeCrowd --//
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salarioFixo = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());

console.log("TOTAL = R$ " + (salarioFixo + (vendas * 0.15)).toFixed(2));