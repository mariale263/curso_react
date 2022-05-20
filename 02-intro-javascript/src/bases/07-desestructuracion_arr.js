//Desestructuración de arreglos

//forma tradicional
const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log( personajes [0]);
// console.log( personajes [2]);
// console.log( personajes [3]);

//Con la desestructuración:

const [ , ,p3 ] = personajes;
console.log( p3 )

//Nueva funcion
const retornaArreglo = () =>{
    return ['ABC', 123];
}
const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

//Tarea: 1. el primer valor de arreglo se llamara nombre y el segundo seteNombre

const usesState = ( valor ) => {
    return [valor, ()=>{ console.log('Hola Mundo')}];
}
const [nombre, seteNombre] = usesState('Goku');
console.log(nombre);
seteNombre();