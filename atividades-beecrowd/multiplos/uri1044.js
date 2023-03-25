//-- primeira versão --//
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

if ((a % b === 0 || b % a === 0)) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}

//-- Versão no BeeCrowd --//
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const [a, b] = input.split(" ").map(Number);

if (a % b === 0 || b % a === 0) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}