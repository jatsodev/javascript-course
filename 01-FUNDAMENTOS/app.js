// console.log('Hola Mundo');

// let a = 10;
// let b = 10;
// let c = 10;
// let d = 10;

// let x = a + b;

let a = 10,
    b = 20,
    c = 'Hola ', 
    d = 'Spiderman',
    x = a + b;

const saludo = c + d;

console.log('%c Mis variables', 'color:blue; font-weight:bold');
// console.log('a', a);
console.log({ a });
console.log({ b });
console.log({ c });

c = 'Hola de nuevo';

console.table({a, b, c, d, x});

console.log(x);
console.warn(x);
console.error(x);
console.info(x);
console.log(a);
