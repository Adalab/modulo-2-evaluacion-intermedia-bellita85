'use strict';


const result = document.querySelector('.js-result')
const btn = document.querySelector('.js-btn');
const select = document.querySelector('.js-select');


function getRandom(max) {
    return Math.ceil(Math.random() * max);
  }


function selectGood () {
  debugger
  let wrong = getRandom (6);
 let good = parseInt(select.value)
if (good > wrong) {
  result.innerHTML = " Ha ganado el Ejército del Bien! Enhorabuena."
}
 if (good < wrong) {
  result.innerHTML = " Ha ganado el Ejército del Mal! Vuelve a Intentarlo."
 }
 if (good === wrong ) {
  result.innerHTML = "Empate."
 }
}


function handleClick(e) {
 e.preventDefault();
 
 selectGood ();
}
 

btn.addEventListener('click', handleClick)


// function getRandom(max) {
//   return Math.round(Math.random() * max);
// }