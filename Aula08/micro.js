/* function podeSubir (altura,acompanhada){
    
    if(((altura >= 1.4 && altura <= 2.00 ) && acompanhada) || (altura >= 1.2 && acompanhada )){
        return true
    } else{
        return false
    }
}


console.log(podeSubir(1.3,false));
 */
function podeSubir (altura,acompanhada){
    
    if(altura >= 1.4 && altura <= 2.00 ){
        return "Acesso autorizado";
    } else if ((altura >= 1.2 && altura < 1.4) && acompanhada ){
        return "Acesso autorizado somente com acompanhante";
    }else{
        return "Acesso negado.";
    }
}


console.log(podeSubir(1.3,true));