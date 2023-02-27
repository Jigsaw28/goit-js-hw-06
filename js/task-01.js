const categoriesList = document.querySelector("ul#categories");

const categoriesItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);

const arrayItems = [...categoriesItems];

const categories = categoriesItems.forEach((item) => {
  const categoriesName = item.firstElementChild.textContent;
  const categoriesElements = item.lastElementChild.children.length;
  console.log(`Category: ${categoriesName}`);
  console.log(`Elements: ${categoriesElements}`);
});
