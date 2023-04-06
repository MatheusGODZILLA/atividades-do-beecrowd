var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift('Insira um número inteiro:'));

for (let i = 2; i <= n; i += 2) {
    const quadrado = i * i;
    console.log(`${i}^2 = ${quadrado}`);
}