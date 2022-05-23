//Fech API

const apiKey = '5YSfU852C8v0d3uoNGpV7RCY1CGFdtQM';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${ apiKey }`);

//peticion.then( resp => {
    //console.log(resp)
    // resp.json().then( data =>{
    //     console.log( data )
    // })
//})
//otra forma de hacerlo con codigo mas limpio y se conoce como promesas en cadena:
peticion
    .then( resp => resp.json() )
    //para no poner data.data vamos a usar la desestructuracion
    // .then( data =>{
    //     console.log(data.data)
    // })
    .then( ({data}) => {
        //console.log( data.images.original.url )
        //lo vamos a extraer este url y lo vamos a almacenar en una variable mediante desestructuracion
        const { url } = data.images.original;

        //Ahora lo vamos a insertar en html
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );