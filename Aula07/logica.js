/* //comparadores 
>=
<=
10 == '10'; // true
10 === '10'; // false
!==
!=== */

let peso = 85.0
let altura = 1.87;
let imc = peso/(altura*altura);

if(imc < 18.5){
    console.log("Abaixo do peso")
}
if(imc >= 18.5 && imc < 24.9){
    console.log("Peso normal")
}

if(imc > 25){
    console.log("Acima do peso")
}

// ----------------------------------------------

let a = "Vou ao cinema";
let b = "Hoje vai chover";
let expressaoAnd = "Vou ao cinema e hoje vai chover";
let expressaoOu = "Vou ao cinma ou hoje vai chover";

a = true;
b = true;

console.log (a && b);
// no caso do e as duas condições tem que ser verdadeiras, ou a resposta será falsa. 

console.log (a || b); // expressão ou, apenas uma tem que ser verdadeira