//Funciones en js

function saludar (nombre) {
    return `Hola, ${ nombre }`;
}

console.log( saludar('Mariale_263') );

//de esta forma es facil cambiar la funcion por ejemplo si le ponemos luego del cierre de las
// llaves saludar = 20; y por eso no es recomendable hacerlo de esta forma sino de la siguiente:

const saludar2 = function (nombre){
    return `Hola, ${ nombre }`;
}
console.log( saludar2('mariale') );

//funciones de flecha
const saludar3 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

console.log( saludar3( 'María Alejandra') );

//Otra forma de la funcion flecha:

const saludar4 = ( nombre ) => `Hola, ${ nombre }`;
console.log( saludar4( 'Ana') );

const saludar5 = () => `Hola Mundo`;
console.log( saludar5() );

//tema importante en funciones flecha
const getUser =() =>{
    return {
        uid: 'ABC123',
        username: 'mariale_263'
    }
}
console.log(getUser())

//Para hacer esta funcion similar a la anterior simplificada:
const getUser2 =() =>({ uid: 'ABC123', username: 'mariale_263' })

console.log(getUser2())

//Tambien se puede asi:
const user = getUser2();
console.log(user);

//Tarea:
//1. Transformar la siguiente funcion a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

// function getUsuarioActivo ( nombre ) {
//     return{
//         uid: 'Diego',
//         username: nombre
//     }
// };
// const usuarioActivo = getUsuarioActivo('diego123');
// console.log(usuarioActivo);

const getUsuarioActivo = ( nombre ) => ({ uid: 'Danielito', username: nombre })

const usuarioActivo = getUsuarioActivo('daniel123');
console.log(usuarioActivo);



