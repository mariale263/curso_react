//Async (puede estar independiente) - Await (va de la mano del Async)

//Ejemplo de promesa normal:
// const getImagenPromesa = () => {
//     const promesa = new Promise( (resolve, reject) =>{
//         resolve ('http://jklajfdoafj.com')
//     })
//     return promesa;
// }
//
// getImagenPromesa().then( console.log );

//Otra forma de hacer la misma promesa mas simplificada:

// const getImagenPromesa = () => new Promise(  resolve => resolve ('http://jklajfdoafj.com'))
//
// getImagenPromesa().then( console.log );

//Pero hay otra forma para poderlo leer y entender con Async

// const getImagen = async () => {
//     return 'http://jklajfdoafj.com';
// }
// getImagen().then( console.log )

//Away nos ayuda a trabajar todo el código como si fuera asíncrono

try {
        const getImagen = async () =>{
        const apiKey = '5YSfU852C8v0d3uoNGpV7RCY1CGFdtQM';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );


        console.log(data)
    }
    getImagen();

}catch (error){
        //manejo del error
        console.error(error)
}

