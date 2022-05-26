// //Fech API
//
// const apiKey = '5YSfU852C8v0d3uoNGpV7RCY1CGFdtQM';
//
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${ apiKey }`);
//
// //peticion.then( resp => {
// //console.log(resp)
// // resp.json().then( data =>{
// //     console.log( data )
// // })
// //})
// //otra forma de hacerlo con codigo mas limpio y se conoce como promesas en cadena:
// peticion
//     .then( resp => resp.json() )
//     //para no poner data.data vamos a usar la desestructuracion
//     // .then( data =>{
//     //     console.log(data.data)
//     // })
//     .then( ({data}) => {
//         //console.log( data.images.original.url )
//         //lo vamos a extraer este url y lo vamos a almacenar en una variable mediante desestructuracion
//         const { url } = data.images.original;
//
//         //Ahora lo vamos a insertar en html
//         const img = document.createElement('img');
//         img.src = url;
//
//         document.body.append( img );
//     })
//     .catch( console.warn );

// var div_usuarios = document.querySelector("#usuarios");
// var usuarios = [];
// fetch('https://reqres.in/api/users')
//     .then(data => data.json())
//     .then(users => {
//         usuarios = users.data;
//         console.log(usuarios);
//
//         usuarios.map((user, i) => {
//             let nombre = document.createElement('h3');
//             nombre.innerHTML = i +'. ' + user.first_name + " " + user.last_name;
//
//             div_usuarios.appendChild(nombre);
//
//             document.querySelector(".loading").style.display ="none";
//         });
//     });

window.addEventListener('load', ()=>{

    'use strict';


    getUsuarios()
        .then(data => data.json())
        .then(users => {
            listadoUsuarios(users.data);
        })

    function getUsuarios(){
        return fetch('https://reqres.in/api/users');
    }

    function listadoUsuarios(usuarios){

        console.log('hola', usuarios);
        let tabla = document.getElementById('usuarios');

        for(let valor of usuarios){
            console.log(valor);
            tabla.innerHTML +=`

            <tr>
                <td>${ valor.id }</td>
                <td>${ valor.first_name }</td>
                <td>${ valor.last_name }</td>
            </tr>
            `
        }

        document.querySelector(".loading").style.display ="none";
        //});
    }
});