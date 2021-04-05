const controlsEl = document.querySelector('#controls');
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');
const inputEl = controlsEl.firstElementChild;

const colors = ['rgb(255, 255, 0)', 'rgb(0, 0, 255)', 'rgb(0, 255, 0)', 'rgb(255, 0, 0)', 'rgb(128, 0, 128)'];
const randomizer = max => {
    return Math.floor(Math.random() * max);
}

const createBoxes = (amount) => {
   

    for (let i = 1; i <= amount; i += 1) {
        const divEl = document.createElement('div');
        boxesEl.append(divEl);
        
        divEl.style.backgroundColor = colors[randomizer(colors.length)];
        
        boxesEl.style.display = 'flex';
        divEl.style.marginRight = '10px';
        divEl.style.marginTop = '50px';
        divEl.style.width = `${30 + 10 * i}px`;
        divEl.style.height = `${30 + 10 * i}px`;
    }
    inputEl.value = '';
}

btnRender.addEventListener('click', () => {
    return createBoxes(inputEl.value);
})



const destroyBoxes = () => {
    boxesEl.innerHTML = '';
 }

btnDestroy.addEventListener('click', destroyBoxes)