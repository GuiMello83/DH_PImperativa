let a = [5, 8, 4, 9, 5];
let b = [8, 7, 8, 6, 8];
let c = [7, 5, 10, 8, 3];

function media(array){
    let soma = 0;
    for(let i = 0;i<array.length; i++){
        soma += array[i]; //igual a soma = soma + array[i];
    }
    return soma / array.length;
}

console.log(media(b));


function maior(array){
    let maior = array[0];
    for(let i = 0;i<array.length;i++){
        if(array[i] > maior){
        maior = array[i];
    }
    }
    return maior;
}

console.log(maior(c));

function competicao(a,b,c){
    let mediaA = media(a);
    let maiorA = maior(a);

    let mediaB = media(b);
    let maiorB = maior(b);

    let mediaC = media(c);
    let maiorC = maior(c);

    if(mediaA > mediaB && mediaA > mediaC){
        console.log("Na categoria média o vencedor foi o participante A");
    }else if (mediaB > mediaA && mediaB > mediaC){
        console.log("Na categoria média o vencedor foi o participante B");
    }else if (mediaC > mediaA && mediaC > mediaB){
        console.log("Na categoria média o vencedor foi o participante C");
    }else{
        console.log("Não teve vencedor");

        if(maiorA > maiorB && maiorA > maiorC){
            console.log("Na categoria maior o vencedor foi o participante A");
        }else if (maiorB > maiorA && maiorB > maiorC){
            console.log("Na categoria maior o vencedor foi o participante B");
        }else if (maiorC > maiorA && maiorC > maiorB){
            console.log("Na categoria maior o vencedor foi o participante C");
        }else{
            console.log("Não teve vencedor");}


    }

}

competicao(a,b,c);