var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salario = parseFloat(lines.shift());

if (salario <= 2000.0) {
  console.log('Isento');
} else if (salario <= 3000.0) {
  let imposto = (salario - 2000.0) * 0.08;
  console.log('R$ ' + imposto.toFixed(2));
} else if (salario <= 4500.0) {                    //Se o salário estiver na faixa de R$ 3.000,01 a R$ 4.500,00,
  let imposto = 80.0 + (salario - 3000.0) * 0.18;  //o imposto é calculado como R$ 80,00 (8% de 1000) mais 18%
  console.log('R$ ' + imposto.toFixed(2));         //sobre o valor que excede R$ 3.000,00.
} else {
  let imposto = 350.0 + (salario - 4500.0) * 0.28; //Se o salário for maior que R$ 4.500,00,
  console.log('R$ ' + imposto.toFixed(2));         //o imposto é calculado como R$ 350,00 (35% de 1000) mais 28% 
}                                                  //sobre o valor que excede R$ 4.500,00.