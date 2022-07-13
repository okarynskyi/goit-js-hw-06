const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector("#ingredients");

const listMaker = listIngr => {
  return listIngr.map(ingredient => {
    const newLi = document.createElement('li');
    newLi.textContent = ingredient;
    newLi.classList.add('item');  
    return newLi
  })
}

ulList.append(...listMaker(ingredients))
