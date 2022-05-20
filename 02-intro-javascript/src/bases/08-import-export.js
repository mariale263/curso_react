//importar y exportar comunes de arreglos
// import { heroes } from "./data/heroes";
//import heroes from "./data/heroes";

//ejemplo de importaciones individuales
// import heroes, { owners } from "./data/heroes";
// console.log( owners );

//otra forma de exportarlos
// import { heroes, owners } from "./data/heroes";
// console.log( owners );

//para exportar con uno por defecto debemos dejarlo como originalmente:
import heroes, { owners } from "./data/heroes";
console.log( owners );




// const getHeoresById = (id) => {
//     return heroes.find( ( heroe ) => {
//         if ( heroe.id === id ){
//             return true;
//         }else {
//             return false;
//         }
//     });
// }
//
// console.log( getHeoresById(2) );

//simplificando el codigo anterior

// const getHeoresById = (id) => {
//     return heroes.find( ( heroe ) => heroe.id === id);
//}
// console.log( getHeoresById(2) );

//otra forma de hacerlo

const getHeoresById = (id) => heroes.find( ( heroe ) => heroe.id === id);
console.log( getHeoresById(3) );

//Nueva funcion
const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner);
console.log( getHeroesByOwner('DC') );


//Multimples exportaciones y exportaciones por defecto
