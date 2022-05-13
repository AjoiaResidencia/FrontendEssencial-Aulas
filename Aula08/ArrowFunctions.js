// function exibirOla(){
//     return "Olá Mundo"
// }

// var ola = function(){
//     return "Olá Mundo"
// }

//Arrow Function
// var ola = () => {
//     return "Olá Mundo"
// }

//var ola = () => "Olá Mundo"

//var ola = _ => "Olá Mundo"

console.log(ola());

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const novoArray = [];

numeros.forEach((elemento) => {
    console.log(elemento);
})

//Muito Utilizado
numeros.map((elemento) => {
    novoArray.push(elemento + 1)
})

console.log(novoArray);
