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

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.endereco.rua);
console.log(pessoa.endereco.numero);
pessoa.gritar();

var gritarr = pessoa.gritar;

gritarr();
