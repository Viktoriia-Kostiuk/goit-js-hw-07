const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const ingredientsRef = document.querySelector('#ingredients');
let ingredientsEl = [];

ingredients.forEach(ingredient => {
    const childEl = document.createElement('li');
    childEl.textContent = ingredient;
    ingredientsEl.push(childEl);
})

ingredientsRef.append(...ingredientsEl);