//ex1
 let peliculas = ["star wars", "totoro", "rock", "pulp fiction", "a vida é bela"]
 let peliculas2 = ["star wars2", "totoro2",  "rocky2", "pulp fiction2",  "la vida es bella2"]; 
function converterMaiusculas(array){
for(let i = 0; i < array.length; i++){
    array[i] = array[i].toUpperCase();
    
} 
console.log(array);
}

converterMaiusculas(peliculas);


//ex2 concatena array
/* let peliculasOriginal = []
i = -1
while(++i < peliculas.length){
    peliculasOriginal[i] = peliculas[i];
    console.log(peliculasOriginal);
}*/
//ex3
let asiaScores = [8,10,6,9,10,6,6,8,4];
let euroScores = [8,10,6,8,10,6,7,9,5];

function comparacaoEntreArrays(asia,europa){
   let comparacoes = [];
    if(asia.lenght === europa.lenght){
        for(let i = 0; i > asia.lenght; i++){
            let comparacao = asia[i] === europa[i];
            comparacoes = asia[i] === europa[i];
        }
    }
    console.log(comparacoes);
}
comparacaoEntreArrays(asiaScores,euroScores);


//ex4
/* 
let asiaScores = [8,10,6,9,10,6,6,8,4];
let euroScores = [8,10,6,8,10,6,7,9,5];
let compara = [];

for(let i=0; i < asiaScores.length; i++) {
    compara[i] = asiaScores[i] === euroScores[i];
}
console.log(compara);
console.log(asiaScores);
console.log(euroScores); */





