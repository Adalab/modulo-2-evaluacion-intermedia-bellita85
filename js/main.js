'use strict';

const result = document.querySelector('.js-result');
const btn = document.querySelector('.js-btn');
const select = document.querySelector('.js-select');
const resultJugador = document.querySelector('.js-result-jugador');
const resultComputadora = document.querySelector('.js-result-computadora');
const btnReset = document.querySelector('.js-btn2');
const end = document.querySelector('.js-end');
let goodFinal = 0;
let strongFinal = 0;
let movie = 0;

function getRandom(max) {
  return Math.ceil(Math.random() * max);
}
function wrong() {
  let wrongRandon = getRandom(5);
  let strong = '';
  if (wrongRandon === 1|| wrongRandon === 2 || wrongRandon === 3) {
    strong = 2;
  }
  if (wrongRandon === 4) {
    strong = 3;
  }
  if (wrongRandon === 5) {
    strong = 5;
  }
  return strong;
}
function paint (painthtml, write) {
painthtml.innerHTML = write ;

}
function selectGood() {
  let strong = wrong();
  let good = parseInt(select.value);
  if (good === 0) {
    paint (result, ' Debe elegir una raza.' ); }
   else { if (good > strong) {
    paint (result, ' Ha ganado el Ejército del Bien! Enhorabuena.' );
    // result.innerHTML = ' Ha ganado el Ejército del Bien! Enhorabuena.'; este si funciona
    goodFinal++;
    movie++;
    paint (resultJugador, goodFinal);
    // resutJugador.innerHTML = `${goodFinal}`;  preguntsar por que no funciona asi
  }
  if (good < strong) {
    paint (result, ' Ha ganado el Ejército del Mal! Vuelve a Intentarlo.' );
    strongFinal++;
    movie++;
    paint (resultComputadora, strongFinal);
  }
  else if (good === strong) {
    paint (result, 'Empate.' );
   
    movie++;
  }

    
   } 
}
function point() {
  if (movie === 10) {
    btnReset.classList.remove('reinicio');
    btn.classList.add('reinicio');
    endF();
  }
}
function endF() {
  if (goodFinal > strongFinal) {
    end.innerHTML = ' Has ganado el juego!';
  } else if (goodFinal < strongFinal) {
    end.innerHTML = ' El ordenador ganado el juego!';
  } else {
    end.innerHTML = 'Empate!';
  }
}
function handleClick(e) {
  e.preventDefault();
  selectGood();
  point();
}
btn.addEventListener('click', handleClick);
