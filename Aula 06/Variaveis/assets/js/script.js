//var escopo de função
//let escopo de bloco
//const mesmo comportamento da let 


// var exibirTexto = function(){

//     if(true){
//         var textoIf = "Var dentro do IF";
//     }
// }

// console.log(textoIf);
// exibirTexto();

// var exibirTexto = function(){

//     if(true){
//         let textoIf = "Let dentro do IF";
//     }
//     console.log(textoIf);
// }

// exibirTexto();

// var exibirTexto = function(){

//     if(true){        
//         const textoIf = "Const dentro do IF";
//         textoIf = "Novo valor";
//         console.log(textoIf);
//     }
// }

// exibirTexto();


var exibirTexto = function(){
    nome = "Abner";
    console.log(nome);
    
    var nome;
}

exibirTexto();
