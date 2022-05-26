// import React from 'react';
// import ReactDOM from 'react-dom';
//
// const saludo = <h1>Hola Mundo</h1>;
//
// const divRoot = document.querySelector('#app');
//
// ReactDOM.render( saludo, divRoot );

//Trabajando en la siguente seccion Nuestro primer componente

import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from "./CounterApp";


const divRoot = document.querySelector('#app');

//ReactDOM.render( <PrimeraApp saludo="Hola, soy María" /> , divRoot );

ReactDOM.render( <CounterApp value={ 10 } /> , divRoot );