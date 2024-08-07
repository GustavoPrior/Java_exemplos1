const prompt = require("prompt-sync")();

let lista = prompt("Digite quantos numeros voce quer na lista:");

let array = []

for (let i = 0; i < lista; i++) {
    let num = prompt(`Digite o numero ${i + 1}:`);
    array.push(num);
}

console.log(array)