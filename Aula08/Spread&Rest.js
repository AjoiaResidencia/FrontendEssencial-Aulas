//ARRAY

//Spread
// const meuArray = [1, 2, 3]
// const meuArray2 = [6, 7, 8]
// const meuArray3 = [...meuArray, 4, 5, ...meuArray2]

// console.log(meuArray);
// console.log(meuArray2);
//console.log(meuArray3);

//REST
// const meuArray = [1, 2, 3, 4, 5]

// const[primeiro, ...banana] = meuArray

// console.log(primeiro);
// console.log(banana);


//SPREAD OBJETOS
// var pessoa = {
//     nome: "Abner",
//     sobrenome: "Joia",
//     idade: 31,
//     endereco:{
//         rua: "Rua mosela",
//         numero: 120,
//         cidade: "Petropolis"
//     },
//     gritar: function(){
//         console.log("AAAAAAAAA....")
//     }
// }

//const pessoa2 = {...pessoa, sobrenome: "Silva"}
// const pessoa3 = {...pessoa, endereco:{...pessoa.endereco, cidade: "Rio de Janeiro"}}
// const pessoa4 = {...pessoa, idade:18, endereco:{...pessoa.endereco, cidade: "Rio de Janeiro"}, sobrenome: "Silva"}
// console.log(pessoa3);

//REST OBJETOS
// var pessoa = {
//     nome: "Abner",
//     sobrenome: "Joia",
//     idade: 31,
//     endereco:{
//         rua: "Rua mosela",
//         numero: 120,
//         cidade: "Petropolis"
//     },
//     gritar: function(){
//         console.log("AAAAAAAAA....")
//     }
// }

// const {nome, endereco, ...restoPessoa} = pessoa;
// const {cidade, ...restoEndereco} = endereco;
// console.log(nome)
// console.log(restoPessoa)
// console.log(cidade)
// console.log(restoEndereco)


//FUNÇÕES
// function somarNumeros(n1, n2, n3){
//     console.log(n1 + n2 + n3)
// }
// somarNumeros(2, 2, 2, 2)

//SPREAD
// function somarNumeros(n1, n2, n3){
//     console.log(n1 + n2 + n3)
// }
// const numeros = [2, 2, 3, 4, 5]
// somarNumeros(...numeros)

//REST
// function exibirNomes(...nomes){
//     console.log(nomes)
// }

// exibirNomes("Liliane", "Amanda", "Jorge", "Renato", "Olivia")
// exibirNomes("Abner", "Sophia", "Marco")
// exibirNomes("Abner")

