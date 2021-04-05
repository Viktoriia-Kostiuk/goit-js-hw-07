const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === 6) {
        inputEl.classList = 'valid';
    } else if (inputEl.value.length>0 || inputEl.value.length>6) {
        inputEl.classList = 'invalid';
    } else
        inputEl.classList.remove('valid', 'invalid')
})



