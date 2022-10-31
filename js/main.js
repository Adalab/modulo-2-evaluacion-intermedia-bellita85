'use strict';


const result = document.querySelector('.js-result')
const btn = document.querySelector('.js-btn');
const select = document.querySelector('.js-select');


function getRandom(max) {
    return Math.ceil(Math.random() * max);
  }
function wrong () {
  debugger
  let wrongRandon = getRandom (5);
  let  strong = ""
  if ( wrongRandon === 1 ){ 
    strong = 2
  }
 if (wrongRandon === 2 ){ 
strong = 2 
}
if (wrongRandon === 3 ){ 
  strong = 2 
  }
if (wrongRandon === 4 ){ 
strong = 3 
    }
 if (wrongRandon === 5 ){ 
 strong = 5
      }
     
      return strong ;
    };


function selectGood () {
 
  let strong =  wrong();
 let good = parseInt(select.value)
if (good > strong) {
  result.innerHTML = " Ha ganado el Ejército del Bien! Enhorabuena."
}
 if (good < strong) {
  result.innerHTML = " Ha ganado el Ejército del Mal! Vuelve a Intentarlo."
 }
 if (good === strong ) {
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