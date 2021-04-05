
const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const counterValue=document.querySelector('#value')

let i = 0;

btnDec.addEventListener('click', () => counterValue.textContent = i-=1);
btnInc.addEventListener('click', () => counterValue.textContent = i+=1);