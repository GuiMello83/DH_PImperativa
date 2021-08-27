//if ternario

let texto = "Olá Mundo";
let p = `<p> ${texto != null || texto != undefined ? texto : ''} </p>`;

console.log(p);


/* if (texto != null)
p = `<p> ${texto}</p>`;
else
 */

//swith

let diaDaSemana = "quinta";

switch(diaDaSemana) {
    case "segunda":
    console.log("diasDaSemana");
    break;

    case "terca":
        console.log("diasDaSemana");
        break;

    case "quarta":
        console.log("diasDaSemana");
        break;

    default:
        console.log("Não Definido");

}