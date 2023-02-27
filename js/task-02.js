const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const array = [];

const ingredientsList = ingredients.forEach(element => {
  const listItem = document.createElement("li");
  listItem.textContent = element;
  listItem.classList.add("item");
  array.push(listItem);
});

list.append(...array);
console.log(list);


