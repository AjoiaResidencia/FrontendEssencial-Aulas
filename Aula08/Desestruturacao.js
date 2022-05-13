//OBJETOS
var pessoa = {
    nome: "Abner",
    sobrenome: "Joia",
    idade: 31,
    endereco:{
        rua: "Rua mosela",
        numero: 120,
        cidade: "Petropolis"
    },
    gritar: function(){
        console.log("AAAAAAAAA....")
    }
}

//EX1
// const {nome, gritar, endereco} = pessoa;
// const {cidade, numero} = endereco;

// console.log(nome);
// console.log(cidade);
// console.log(numero);
// gritar();


//EX2
// const {cidade} = pessoa.endereco;
// console.log(cidade);

//ARRAYS
const nomes = ['Abner', 'Mariana', 'João', 'Luiza'];

const [primeiro, segundo,, quarto] = nomes;

console.log(primeiro);
console.log(segundo);
console.log(quarto);

