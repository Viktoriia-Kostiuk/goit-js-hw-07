const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

// const inputName = 
    
inputEl.addEventListener('input', () => {
    if (inputEl.value==='') {
        nameEl.textContent = 'незнакомец';
     }else
    nameEl.textContent = inputEl.value;
})


