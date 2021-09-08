let alicia = [23, 69, 32];
let bob = [12, 67, 43];

function ganhador(a,b){

let pointA = 0;
let pointB = 0;
let empate = 0;

let len = a.length
let i = 0

while (i<len){
    if(a[i] > b[i]){
        pointA += 1
    }
    else if (a[i] < b[i]){
        pointB += 1
    }else { empate += 1}
    i++
}
if (pointA > pointB){
    return `O ganhador é: Alícia com ${pointA} pontos.`
}
else if (pointA < pointB){
    return `O ganhador é: Bob com ${pointB} pontos.`
}else {return `Não tivemos ganhador. Alícia e Bob empataram com ${empate} pontos`}
}
console.log(ganhador(alicia,bob));
