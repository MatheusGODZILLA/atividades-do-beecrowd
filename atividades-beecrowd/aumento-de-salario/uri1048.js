//-- Primeira versão --//
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let salario = parseFloat(input);

let percentual, reajuste, novoSalario;

if (salario <= 400.0){
    percentual = 0.15;
}
else if (salario <= 800.0){
    percentual = 0.12;
}
else if (salario <= 1200.0){
    percentual = 0.10;
}
else if (salario <= 2000.0){
    percentual = 0.07;
}
else{
    percentual = 0.04;
}

reajuste = salario * percentual;
novoSalario = salario + reajuste;

console.log("Novo salario:", novoSalario.toFixed(2));
console.log("Reajuste ganho:", reajuste.toFixed(2));
console.log("Em percentual:", percentual * 100, "%");

//-- Versão para o BeeCrowd --//
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let salario = parseFloat(input);

let percentual, reajuste, novoSalario;

if (salario <= 400.0){
    percentual = 15;
}
else if (salario <= 800.0){
    percentual = 12;
}
else if (salario <= 1200.0){
    percentual = 10;
}
else if (salario <= 2000.0){
    percentual = 7;
}
else{
    percentual = 4;
}

reajuste = salario * (percentual / 100.0);
novoSalario = salario + reajuste;

console.log("Novo salario: " + novoSalario.toFixed(2));
console.log("Reajuste ganho: " + reajuste.toFixed(2));
console.log("Em percentual: " + percentual + " %");