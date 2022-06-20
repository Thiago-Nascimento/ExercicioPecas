let dataHoje = new Date() // Salvando a data atual
let dataEventoString = new Date("2021-06-28") // Salvando a data do evento com uma string
let dataEventoArg = new Date(2022, 7, 28) // Salvando a data do evento com argumentos numericos
// listaMeses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

console.log("A data de hoje eh:", dataHoje)
console.log("O aniversario do Thiago eh:", dataEventoString)
console.log("O aniversario do Thiago eh:", dataEventoArg)

if (dataEventoString > dataHoje) {
    console.log("A data do evento eh valida")
} else {
    console.log("Data invalida")
}