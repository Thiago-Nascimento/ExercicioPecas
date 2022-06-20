// Somatoria

// Laco Contado - For
// for(let i = 0; i < 10; i += 1) {
//     console.log(i)
// }

let prompt = require('prompt-sync')()

let opcaoUsuario = parseInt( prompt("Digite uma opcao: ") ) 

console.log("A opcao digitada pelo usuario foi " + opcaoUsuario)

// Laco Condicional - While
while(opcaoUsuario != 0) {
    opcaoUsuario = parseInt( prompt("Digite 0 para sair: ") )
}

console.log("Voce saiu do loop")

// !true -> false
// !false -> true
