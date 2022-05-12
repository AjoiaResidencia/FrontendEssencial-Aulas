var palavra = 'Catapora';
console.log(palavra[5]);
console.log(palavra.length);

var novaPalavra = palavra.replace('pora', 'pimba');

var nomeCompleto = "Abner Joia";
var primeiroNome = nomeCompleto.split(' ', 2)[0]
var segundoNome = nomeCompleto.split(' ', 2)[1]
console.log(primeiroNome);
console.log(segundoNome);

var textoInteiro = "10";
var nInteiro = parseInt(textoInteiro);
console.log(textoInteiro);
console.log(nInteiro);

var textoFloat = "10.22";
var float = parseFloat(textoFloat);
console.log(textoFloat);
console.log(float);

var milNumber = 1000;
//var texto = milNumber.toFixed(2);
console.log(milNumber.toFixed(2));
