function saludar(nombre){
    console.log(arguments);
    console.log('Hola ' + nombre);
    // return 10;
    return [1,2];

    console.log('codigo despues del return');//esto nunca se va a ejecutar
}

const saludar2 = function(nombre) {//funcion anoninma
    console.log('Hola ' + nombre );
}

const saludarFlecha = () => {   
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => { //los argumentos pueden ir sin parentesis
    console.log('Hola ' + nombre);//funcion flecha, lamda
}

// const retornoDeSaludar = saludar('Jatso', 40, true, 'Costa Rica');
// console.log({retornoDeSaludar});
// console.log(retornoDeSaludar[0], retornoDeSaludar[1]);


// saludar('Cronos', 8, true, 'Colombia');
// saludar2('Cronos');

// saludarFlecha();
// saludarFlecha2('Melissa');

function sumar(a,b){
    return a + b;
}

const sumar2 = (a,b) => {
    return a + b;
}

const sumar3 = (a,b) => a + b;

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

// console.log(sumar(1,2));
// console.log(sumar2(1,3));
// console.log(sumar3(1,4));

console.log( getAleatorio() );
console.log( getAleatorio2() );

