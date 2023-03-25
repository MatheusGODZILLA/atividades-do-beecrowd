//-- Primeira versão --//
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let inicio = parseInt(lines.shift());
let fim = parseInt(lines.shift());

let duracao;

if (inicio >= fim){
    duracao = 24 - inicio + fim;
}
else{
    duracao = fim - inicio;
}

console.log("O JOGO DUROU", duracao, "HORA(S)");

//-- Versão para o BeeCrowd --//
var input = require("fs").readFileSync("/dev/stdin", "utf8");
let [inicio, fim] = input.split(" ").map(Number);

let duracao;

if (inicio < fim) {
  duracao = fim - inicio;
} else {
  duracao = 24 - inicio + fim;
}

console.log("O JOGO DUROU", duracao, "HORA(S)");