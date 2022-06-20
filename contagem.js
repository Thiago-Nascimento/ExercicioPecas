let listaAlunos = ["Icaro", "Elisama", "Tamires", "Juan", "William", "Joao"]

for(let numero = 0; numero < listaAlunos.length; numero++) {
    // console.log(numero)
    if(numero == 0) {
        console.log("o numero eh ZERO")
    } else if (numero % 2 == 0) {
        console.log(`o numero ${numero} eh PAR`)
    } else if (numero % 2 == 1) {
        console.log(`o numero ${numero} eh IMPAR`)
    }

}

// 7 / 2 -> 3 e sobra 1
// 6 / 2 -> 3 e sobra 0
// %

