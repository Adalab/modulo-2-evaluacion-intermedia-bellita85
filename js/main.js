'use strict';

const result = document.querySelector('.js-result');
const btn = document.querySelector('.js-btn');
const select = document.querySelector('.js-select');
const resutJugador = document.querySelector('.js-result-jugador');
const resutComputadora = document.querySelector('.js-result-computadora');
const btnReset = document.querySelector('.js-btn2');
const end = document.querySelector('.js-end');
let goodFinal = 0;
let strongFinal = 0;
let partidas = 0;

function getRandom(max) {
  return Math.ceil(Math.random() * max);
}
function wrong() {
  let wrongRandon = getRandom(5);
  let strong = '';
  if (wrongRandon === 1) {
    strong = 2;
  }
  if (wrongRandon === 2) {
    strong = 2;
  }
  if (wrongRandon === 3) {
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

function selectGood() {
  let strong = wrong();
  let good = parseInt(select.value);
  if (good > strong) {
    result.innerHTML = ' Ha ganado el Ejército del Bien! Enhorabuena.';
    goodFinal++;
    partidas++;
    resutJugador.innerHTML = `${goodFinal}`;
  }
  if (good < strong) {
    result.innerHTML = ' Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
    strongFinal++;
    partidas++;
    resutComputadora.innerHTML = `${strongFinal}`;
  }
  else if (good === strong) {
    result.innerHTML = 'Empate.';
    partidas++;
  }
}
function point() {
  if (partidas === 10) {
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
