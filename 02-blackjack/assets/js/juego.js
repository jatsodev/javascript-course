/*

2C = Two of Clubs 
2D = Two of Dimonds 
2H = Two of Herts 
2S = Two of Spades 

*/

let deck = [];

const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

// console.log(btnPedir);
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');

//Esta funcion crea una baraja
const crearDeck = () => {
    for( let i = 2; i <= 10; i++ ){
        for( let tipo of tipos ){
            deck.push( i + tipo );
        }
    }

    for( let tipo of tipos){
        for(let esp of especiales){
            deck.push( esp + tipo );
        }
    }

    // console.log(deck);
    deck = _.shuffle( deck );
    console.log(deck);
    return deck;

}


crearDeck();

//Esta funcion me permite tomar una carta
const pedirCarta = () => {

    if(deck.length === 0 ){
        throw 'No hay cartas en el deck'; //va a lanzar un error en consola
    }

    const carta = deck.pop();
    // console.log(deck);
    // console.log(carta);
    return carta;
}

// deck = [];
// pedirCarta();

const valorCarta = ( carta ) => {

    const  valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ? 
            (valor === 'A') ? 11 : 10
            : valor * 1;
    // let puntos = 0;

    // if (isNaN(valor)){
    //     puntos = (valor === 'A') ? 11 : 10;
    // }else {
    //     puntos = valor * 1 ;
    // }
    
    // console.log(puntos);
}

// const valor = valorCarta(pedirCarta());
// console.log({valor});

//Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do {

    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);

    puntosHTML[1].innerText = puntosComputadora;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);

    if(puntosMinimos > 21){
        break;
    }

    }while(( puntosComputadora < puntosMinimos ) && (puntosMinimos <= 21));

    setTimeout(() =>{
        if (puntosComputadora === puntosMinimos){
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana');
        } else if (puntosComputadora > 21){
            alert('Jugador Gana');
        }else{
            alert('Computadora Gana');
        }
    }, 10);
    
}


//Eventos

//Primero hacer una referencia al elemento HTML hasta arriba
//Para estar escuchando un evento 
//La funcion se llama callback, una funcion que se manda como un argumento a otra funcion 
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    // const puntajePantalla = document.querySelector('small');

    puntosJugador = puntosJugador + valorCarta(carta);

    puntosHTML[0].innerText = puntosJugador;

    // <img class="carta" src="assets/cartas/2C.png"></img>
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21 ){
        console.warn('GAME OVER');
        // console.alert('GAME OVER');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }else if ( puntosJugador === 21 ){
        // console.alert('Ganaste!!!!')
        console.warn('21, genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }

    // console.log(carta);
});//Cuando se de click a este boton se ejecutara la funcion callback


// //TODO: Borrar
// turnoComputadora(12);

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;


});