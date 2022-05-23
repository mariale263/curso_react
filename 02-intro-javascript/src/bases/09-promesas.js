//Promesas

import { getHeoresById } from './bases/08-import-export'
import heroes from "./data/heroes";
//
// const promesa = new Promise( (resolve, reject) =>{
//     setTimeout( () => {
//         //tarea importar el getHeoresById del fichero 08-import-export.js
//         const heroeOp1 = getHeoresById(2);
//         resolve( heroeOp1 );
//         //reject( 'No se pudo encontrar el héroe' )
//     }, 2000)
// });
//
// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn( err ) );

//otro ejemplo
const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) =>{
        setTimeout( () => {
            //tarea importar el getHeoresById del fichero 08-import-export.js
            const p1 = getHeoresById( id );
            if(p1){
                resolve( p1 );
            }else{
                reject( 'No se pudo encontrar el héroe solicitado' );
            }
        }, 2000)
    });
}

getHeroeByIdAsync(10).then( heroes => console.log( 'Heroe', heroes ))
    //.catch( err => console.warn( err ) )
    .catch( console.warn )
