function polToCen(polegada){
 centimetro = polegada * 2,54
 return centimetro
}

console.log(polToCen(10));


function stringToURL(nomeDoDominio){
return "http://wwww." + nomeDoDominio + ".com.br"
}

console.log(stringToURL("qualquercoisa"));

function stringComExclamacao(oQueFor){
    return oQueFor + "!";
}

console.log(stringComExclamacao("What a mess"));

function idadeCachorro(idade){
    return idade * 7
}

console.log(idadeCachorro(2));

function valorHoraDeTrabalho(valorDoMes){
    return valorDoMes / 160
}

console.log(valorHoraDeTrabalho(28000));

function imc(peso, altura){
    return peso / ((altura*altura)/10000)
}
console.log(imc(85,187));

function stringMin(Minuscula){
    return Minuscula.toUpperCase();
}

console.log(stringMin("testedesempre"));