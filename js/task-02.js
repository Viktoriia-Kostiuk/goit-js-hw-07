const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


ingredients.forEach(ingredient => {
    const ingredientsEl = document.querySelector('#ingredients');
    const childEl=document.createElement('li');
    childEl.textContent = ingredient;
    ingredientsEl.appendChild(childEl);
   } )

