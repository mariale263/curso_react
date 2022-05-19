const nombre ='María';
const apellido ='Moreno';

//const nombreCompleto = nombre + ' ' + apellido;
//console.log(nombreCompleto);

//forma template String
//Sirve para no hacer el tipo de concatenación anterior y es sencible a los saltos de linea

const nombreCompleto = ` Hola ${ nombre } ${ apellido }`;
console.log(nombreCompleto);

function getSaludo(){
    return 'Hola Mariale';
}
console.log( `Este es un texto dentro de una function de Js: ${ getSaludo() } ` );

function getSaludo2(){
    return 'Hola ' + nombre;
}
console.log( `Este es un texto dentro de una function de Js: ${ getSaludo2( nombreCompleto ) } ` );

