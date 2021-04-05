const categoriesEl = document.querySelector('#categories');
const listItemEl = document.querySelectorAll('.item');
const titleEl = document.querySelectorAll('h2');
// const liEl = document.querySelectorAll('li');

console.log(`В списке ${categoriesEl.children.length} категории`);


listItemEl.forEach(el => {
    console.log(`Категория:${el.firstElementChild.textContent}`);

    console.log(`Количество элементов:${el.lastElementChild.children.length}`);

})












