//-- Primeira versão --//
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());
let d = parseInt(lines.shift());

if ((b > c) && (d > a) && (c+d > a+b) && (c >= 0 && d >= 0) && (a%2 === 0)){
    console.log("Valores aceitos");
}
else{
    console.log("Valores nao aceitos");
}

//-- Versão para o BeeCrowd --//
var input = require("fs").readFileSync("/dev/stdin", "utf8");
let [A, B, C, D] = input.split(" ").map(Number);

if (B > C && D > A && C + D > A + B && C >= 0 && D >= 0 && A % 2 === 0) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}