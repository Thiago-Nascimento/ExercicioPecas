let numero = 5
let numeroTexto = "5"

// Number
// String

// ==   -> Verifica se os valores sao iguais
// ===  -> Verifica se os valores e os tipos sao iguais

if (numero === numeroTexto) {
    console.log("Os valores sao iguais")
}

// Switch
let alimento = "BaTatA"

switch (alimento.toLowerCase()) {
    case "feijao":
        console.log("O feijao eh rico em ferro e proteinas")
        break;

    case "batata":
        console.log("Pure de batata eh muito bom")
        break;

    case "arroz":
        console.log("Arroz eh um cereal rico em carboidratos")
        break;

    case "chuchu":
        console.log("Chuchu eh top")
        break;

    default:
        console.log("O alimento selecionado nao eh saudavel")
        break;
}

// If Else
if (alimento.toLowerCase() == "feijao") {
    console.log("O feijao eh rico em ferro e proteinas")
} else if (alimento.toLowerCase() == "batata") {
    console.log("Pure de batata eh muito bom")
} else if (alimento.toLowerCase() == "arroz") {
    console.log("Arroz eh um cereal rico em carboidratos")
} else if (alimento.toLowerCase() == "chuchu") {
    console.log("Chuchu eh top")
} else {
    console.log("O alimento selecionado nao eh saudavel")
}

// For

let numeroMaximo = 20

for(let contador = 0; contador < numeroMaximo; contador += 2) {
    // console.log(`Senha incorreta, se erra-la ${numeroMaximo} vezes o cartao sera bloqueado`)
    console.log(contador)
}

for(let contadorRegresivo = 10; contadorRegresivo >= 0; contadorRegresivo--) {
    console.log(contadorRegresivo)
}

