//-- Versão para o BeeCrowd --//
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada = lines.shift();
let [codigo,qtd] = entrada.split(" ");
qtd = parseInt(qtd);
let valorTOTAL = 0;

if(codigo == 1){
    valorTOTAL = qtd * 4;
}else if(codigo == 2) {
    valorTOTAL = qtd * 4.5;
}else if(codigo == 3) {
    valorTOTAL = qtd * 5;
}else if(codigo == 4) {
    valorTOTAL = qtd * 2;
}else if(codigo == 5) {
    valorTOTAL = qtd * 1.5;
}

console.log("Total: R$ " + valorTOTAL.toFixed(2));