'use strict';

const result = document.querySelector('.js-result');
const btn = document.querySelector('.js-btn');
const select = document.querySelector('.js-select');
const resutJugador = document.querySelector('.js-result-jugador');
const resutComputadora = document.querySelector('.js-result-computadora');

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
    paintJugador.innerHTML = '1';
  }
  if (good < strong) {
    result.innerHTML = ' Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
    paintComputadora.innerHTML = '1';
  } else if (good === strong) {
    result.innerHTML = 'Empate.';
  }
}
function handleClick(e) {
  e.preventDefault();
  selectGood();
}

btn.addEventListener('click', handleClick);
