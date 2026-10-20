function saludar(nombre){
    console.log(arguments);
    console.log('Hola ' + nombre);
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


saludar('Cronos', 8, true, 'Colombia');
saludar2('Cronos');

saludarFlecha();
saludarFlecha2('Melissa');