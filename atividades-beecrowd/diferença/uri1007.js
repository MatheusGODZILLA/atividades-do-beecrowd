var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A,B,C,D] = input.split('\n').map(value => parseInt(value));
let diferenca = ((A * B) - (C * D));

console.log("DIFERENCA = " + diferenca);