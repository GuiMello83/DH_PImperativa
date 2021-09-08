let texto = "Este é um texto"; 
// a string é um texto. Na posição 0 da string teria o "E", na posição 1 o "s"... a opção length mostra quantas punções tem.

console.log(texto.length);

console.log(texto.replace("é", "deve ser"));

/* console.log(texto.replaceAll(" ","")); */

let arr = [0,1,2,3,4,5];
let arrString = ["Texto1","Texto2","Texto3"];
let arrMisto = [true,1,"a"];

let tamanho = arr.length;

console.log(arrString[2]); //mostra o ítem pela posição no array, começando de 0

console.log(arrString.indexOf("Texto2")); //mostra em que posição está o ítem que você procura

arrString.push("Texto4"); // adicionado mais uma string ao meu array no final

console.log(arrString);

arrString.pop(); //remove o último elemento do array


// exemplo

let nome = "Guilherme Mello" //precisava garantir que houvesse nome e sobrenome 

let nomeSobrenome = nome.split(" ");
console.log(nomeSobrenome);

if(nomeSobrenome[1] != undefined){
    console.log("Entrou com nome e sobrenome");
}
