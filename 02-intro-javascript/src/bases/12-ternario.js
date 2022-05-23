//Operador condicional ternario

// const activo = true;
//
// let mensaje = '';
//  if (activo){
//      mensaje ='Activo';
//  }else{
//      mensaje = 'Inactivo';
//  }
//  console.log(mensaje);

 //asignacion a una variable que este caso seria mensaje con la condicion ternaria:
// const activo = true;
// const mensaje =( activo ) ? 'Activo' : 'Inactivo';
// console.log(mensaje);

//Otra forma de hacerlo
const activo = true;
const mensaje = !activo && 'Activo';
console.log(mensaje);
