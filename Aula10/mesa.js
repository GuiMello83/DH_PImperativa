let numbers =[22, 33, 54, 66, 72];
console.log(numbers.length);

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ];
console.log(grupoDeAmigos[1][0]);

/* let str = “uma string qualquer”;
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ];
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]);
 */



function inverter(pos1,pos2,pos3,pos4){
    let arr = [pos1, pos2, pos3, pos4];
    
    console.log(arr[3],arr[2],arr[1],arr[0])
    console.log(arr.reverse());

}

inverter('Ab','Bc','Cd','Ef');

function somaArray(pos1){
    const soma = pos1[0] + pos1[1] + pos1[2]
    console.log(soma);
}

somaArray([4, 5, 3]);

function join(pos1){
    
}


join("c","a","s","a");

