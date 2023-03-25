//-- Primeira versão --//
let nota1 = parseFloat(prompt('Insira a primeira nota: '));
let nota2 = parseFloat(prompt('Insira a segunda nota: '));
let nota3 = parseFloat(prompt('Insira a terceira nota: '));

let media = (nota1 + nota2 + nota3) / 3

if(media >= 7) {
  console.log('Aprovado!')
} else{
  console.log('Reprovado!')
}

//-- Versão para o BeeCrowd --//
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let notas = lines.shift().split(" ").map(parseFloat);
let pesos = [2, 3, 4, 1];

let media = notas.reduce((total, nota, index) => total + nota * pesos[index], 0) / pesos.reduce((total, peso) => total + peso, 0);

console.log("Media:", media.toFixed(1));

if (media >= 7){
    console.log("Aluno aprovado.");
}
else if (media < 5){
    console.log("Aluno reprovado.");
}
else{
    console.log("Aluno em exame.");
    let pontuacao = parseFloat(lines.shift());
    console.log("Nota do exame:", pontuacao.toFixed(1));
    let nova_media = (media + pontuacao) / 2;
    if (nova_media >= 5){
        console.log("Aluno aprovado.");
    }
    else{
        console.log("Aluno reprovado.");
    }
    console.log("Media final:", nova_media.toFixed(1));
}