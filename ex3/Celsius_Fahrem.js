const prompt = require("prompt-sync")();

let celius = parseFloat(prompt("escreva um numero em graus celsius:"));

let farenheit = (celsius * 9/5) + 32

console.log(`${celsius} convertido para ${farenheit}!!!`)