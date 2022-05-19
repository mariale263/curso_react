const persona = {
    nombre: 'Maria',
    apellidos: 'Moreno',
    edad: 38,
    direccion: {
        ciudad: 'Tachira',
        zip: 5001,
    }
}

console.log( persona );
//console.table( persona );

//Al crear un nuevo objeto que queremos que sea un clon de otro hacemos lo siguiente

const persona2 ={...persona};
persona2.nombre = 'Diego';

console.log( persona2 );