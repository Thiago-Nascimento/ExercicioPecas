let prompt = require("prompt-sync")()

let numeroMaior;
let numeroMenor;
let valorInserido;

for(let contador = 0; contador < 10; contador++) {
    valorInserido = prompt("Digite um numero: ")

    if (contador == 0) {
        numeroMaior = valorInserido;
        numeroMenor = valorInserido;
    }

    if (valorInserido > numeroMaior) {
        numeroMaior = valorInserido;
    } else if (valorInserido < numeroMenor) {
        numeroMenor = valorInserido
    }
}

// NaN -> Not a Number

console.log(`O maior valor eh ${numeroMaior} e o menor valor eh ${numeroMenor}`)