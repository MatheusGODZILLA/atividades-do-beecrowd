//-- Primeira versão --//
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())

A (0<A)
B (0<B)
C (0<C)

if (A ≥ B+C) {
    console.log("NAO FORMA TRIANGULO")
} else if (A**2 = B**2 + C**2) {
    console.log("TRIANGULO RETANGULO")
} else if (A**2 > B**2 + C**2) {
    console.log("TRIANGULO OBTUSANGULO")
} else if (A**2 < B**2 + C**2) {
    console.log("TRIANGULO ACUTANGULO")
} else if (A = B = C) {
    console.log("TRIANGULO EQUILATERO")
} else if (A = B && A=C && B = C) {
    console.log("TRIANGULO ISOSCELES")
}

//-- Versão para o BeeCrowd --//
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines.shift().split(' ').map(Number);

let order = [A, B, C].sort((a, b) => b - a);

let [a, b, c] = order;

if (a >= b + c) {
    console.log("NAO FORMA TRIANGULO");
} else if (a ** 2 === b ** 2 + c ** 2) {
    console.log("TRIANGULO RETANGULO");
} else if (a ** 2 > b ** 2 + c ** 2) {
    console.log("TRIANGULO OBTUSANGULO");
} else if (a ** 2 < b ** 2 + c ** 2) {
    console.log("TRIANGULO ACUTANGULO");
}

if (a === b && b === c) {
    console.log("TRIANGULO EQUILATERO");
} else if (a === b || b === c || a === c) {
    console.log("TRIANGULO ISOSCELES");
}