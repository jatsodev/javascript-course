

let a = 10;
let b = a;

a = 30;

console.log({ a, b });//con primitivos se pasa por valor no por referencia

let juan = { nombre: 'Juan' };
// let ana = juan; //Los objetos son pasados por referencia, al mismo espacio de memoria
let ana = {...juan};//operador spread ...  //separa los elementos y rompe la referencia
                    //para crear objetos que apuenten a distintos espacios en memoria

ana.nombre = 'Ana';

console.log({juan, ana});

//en JavaScript todos son objetos excepto los primitivos 

// const cambiaNombre = ( persona ) => {//pasa a la funcion por referencia
//     persona.nombre = 'Tony';
//     return persona;
// }
const cambiaNombre = ( { ...persona } ) => {//con operador spread
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});

//Arreglos

const frutas = ['Manzan', 'Pera', 'Pina'];
// const otrasFrutas = frutas;

console.time('slice');
const otrasFrutas = frutas.slice();//regresa un arreglo nuevo y rompe la relacion
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];//entre llaves cuadradas porque se esta creando un nuevo arreglo
                                //... operador spread, separa elementos y rompe relacion
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});