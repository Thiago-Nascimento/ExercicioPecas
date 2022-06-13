let pesoPeca = 100
let numeroPecas = 17
let nomePeca = "Pa"

if(pesoPeca >= 100) {
    console.log("Pode-se cadastrar a peca")
} else {
    console.log("Peso insuficiente")
}

if (numeroPecas >= 10) {
    console.log("Impossivel cadastrar, numero de pecas excedido")
} else {
    console.log("Cadastro Permitido")
}

if (nomePeca.length < 3) {
    console.log("Numero de caracateres insuficiente")
} else {
    console.log("Nome adequado de acordo com as diretivas")
}

// camelCase -> JS
// PascalCase -> Java e C#
// snake_case -> Python

// Array
// let listaPecas = ["Pa", "Roda", "Volante"]
// listaPecas.length