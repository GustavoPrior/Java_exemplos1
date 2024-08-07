const prompt = require("prompt-sync")();

let nota = parseFloat(prompt("Digite a nota do aluno:"));

if (nota < 4){
    console.log("Reprovado")
}else if (4 <= nota && nota < 6){
    console.log("Recuperação")
}else if (nota >= 6){
    console.log("Aprovado")
}