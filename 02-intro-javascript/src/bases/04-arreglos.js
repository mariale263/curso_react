//Arreglos en JS

//const arreglo = new Array( 100 );

const arreglo = [1,2,3,4];
//arreglo.push(1) //No es aconsejable usar el push porque el push modifica el objeto principal.
//arreglo.push(2)
//arreglo.push(3)
//arreglo.push(4)

let arreglo2 = [...arreglo, 5];
//arreglo2.push ( 5 );
console.log( arreglo );

//usando map
const arreglo3 = arreglo2.map( function (numero) {
    return numero * 2;
});
console.log( arreglo3);