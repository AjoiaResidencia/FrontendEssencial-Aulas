function olaMundo(){
    return "Olá Mundo"
}

//var texto = olaMundo();

var texto = function(){
    return "Olá Mundo"
}

function exibirTexto(func){
    console.log(func());
}

exibirTexto(texto)
