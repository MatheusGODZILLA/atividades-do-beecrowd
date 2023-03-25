//-- primeira versão --//
let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let a = parseFloat(lines.shift('Insira o valor do lado maior: '));
let b = parseFloat(lines.shift('Insira o valor do lado menor: '));
let c = parseFloat(lines.shift('Insira o valor do lado restante: '));
let perimetro = a + b + c;
let areaTrapezio = (a + b)* c / 2;

if (a < (b + c) && b < (a + c) && c < (a + b)) { 
  console.log('Os valores fornecidos formam um triângulo')
  console.log('O perimetro é: ', perimetro)}
else{
  console.log('A área do trapézio é:', areaTrapezio)
}

//-- Versão no BeeCrowd --//
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = input.split(" ").map(Number);

if (A < B + C && B < A + C && C < A + B) {
    const perimeter = A + B + C;
    console.log(`Perimetro = ${perimeter.toFixed(1)}`);
  } else {
    const area = ((A + B) * C) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
  }