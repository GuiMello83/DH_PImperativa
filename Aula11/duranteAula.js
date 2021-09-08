/* for(let i = 0; i < 5; i++){
    console.log("Olá Mundo " + i);
}


let contador = 0

while(contador < 5){
    console.log("Olá Mundo " + contador);
    contador++;
} */

/* let contador = 0 */

//executa pelo menos uma
/* do{
    console.log("Olá Mundo " + contador);
    contador++;
}while(false)
 */

//numeros impares
/* 
for(let i = 1; i <= 10; i++){
    if(i % 2 == 0){ //nesse caso o resto da divisão é igual a zero. Poderia ser diferente de 1... 
        continue;
        
    }
    console.log(i);
}
 */

//tabuada

for(let i = 1; i < 10; i++){
    console.log(`Tabuada de ${i} \n`);
    for(let j =1; j< 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
    console.log('\n');
}
