// Desestructuración de objetos
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironmam'
};
// console.log( persona.nombre );
// console.log( persona.edad );
// console.log( persona.clave );

//como hacer lo anterior de forma que no estemos poniendo persona. a cada rato:

// const { nombre, edad, clave} = persona;

//console.log( nombre ); // y asi lo simplificamos sin estar poniendo persona.nombre
// console.log( clave );
// console.log( edad );

//Otro ejemplo

// const  retornoPersona = ( usuario ) => {
//     console.log(usuario)
// }
// retornoPersona( persona );

//si queremos hacer lo mismo de arriba de imprimir a cada uno:

// const  retornoPersona = ( usuario ) => {
//
//     const { nombre, edad, clave} = usuario;
//
//     console.log( edad, clave, nombre)
// }
// retornoPersona( persona );

//como hacer la desestructuracion en el argumento y a su vez agregar un elemento nuevo no declarado antes:

// const  retornoPersona = ({ nombre, edad, rango = 'Capitán' }) => {
//     console.log( nombre, edad, rango );
// }
// retornoPersona( persona );

//
const usesContext = ({ nombre, edad, clave, rango = 'Capitán'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        //a continuacion vamos a poner un objeto anidado para luego extraerlo mas abajo
        latlng: {
            lat: 14.1555,
            lng: -1.36548
        }
    }
}
//const avenger = usesContext( persona );
//console.log(avenger)

const { nombreClave, anios, latlng:{ lat, lng }} = usesContext( persona );
console.log( nombreClave, anios);
console.log( lat, lng);

