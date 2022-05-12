const frutas = [];

console.log(frutas.length);
frutas.push("Laranja");
frutas.push("Banana");
frutas.push("Maçã");

// console.log(frutas.length);
// console.log(frutas.join(" | "));
// frutas.pop();
// console.log(frutas.join(" | "));
// frutas.shift();
// console.log(frutas.join(" | "));

// var elemento = frutas.indexOf("Maçã");
// console.log(elemento);
// console.log(frutas[elemento]);

var element = frutas.find(function(e){
    return e === "Banana";
})

console.log(element);

var elem = frutas.find(e => e === "Maçã");
console.log(elem);
