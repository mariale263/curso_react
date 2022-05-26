// import React from 'react';
// import PropTypes from 'prop-types';
//
// const CounterApp = ({ nombre, value }) =>{
//     const handleAdd = (e) =>{
//         console.log(e)
//     }
//
//     return (
//         <>
//             <h1>{ nombre }</h1>
//             <h2>{ value }</h2>
//
//             {/*Eventos click: como se manejan, se puede hacer directamente, y en react como son:*/}
//             <button onClick={ handleAdd }>+1</button>
//         </>
//     );
// }
//
// CounterApp.propTypes = {
//     nombre: PropTypes.string.isRequired
// }
//
// CounterApp.defaultProps = {
//     nombre: 'CounterApp'
// }
//
// export default CounterApp;

//Otra opción diferenciándolo de la anterior colocando el parenthesis en la función y com o hacerlo
import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ nombre, value }) =>{
    const handleAdd = (e) =>{
        return () => console.log('Hola mundo');
    }

    return (
        <>
            <h1>{ nombre }</h1>
            <h2>{ value }</h2>

            {/*Eventos click: como se manejan, se puede hacer directamente, y en react como son:*/}
            <button onClick={ handleAdd() }>+1</button>
        </>
    );
}

CounterApp.propTypes = {
    nombre: PropTypes.string.isRequired
}

CounterApp.defaultProps = {
    nombre: 'CounterApp'
}

export default CounterApp;