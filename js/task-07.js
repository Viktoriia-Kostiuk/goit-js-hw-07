const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

// inputEl.addEventListener('input', makeSize);

// const makeSize = () => {textEl.textContant.style.fontSize = inputEl.value+'px' }


inputEl.addEventListener('input', () => {
    textEl.style.fontSize = inputEl.value + 'px'
});

