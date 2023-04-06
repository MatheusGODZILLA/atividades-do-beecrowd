//-- Versão para o BeeCrowd --//
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numerosPositivos = 0;
let somaPositivos = 0;

for (let i = 0; i < 6; i++) {
  const valor = parseFloat(lines.shift('Digite um valor: '));
  if (valor > 0) {
    numerosPositivos = numerosPositivos + 1;
    somaPositivos = somaPositivos + valor;
  }
}

console.log(`${numerosPositivos} valores positivos`);
console.log((somaPositivos / numerosPositivos).toFixed(1));