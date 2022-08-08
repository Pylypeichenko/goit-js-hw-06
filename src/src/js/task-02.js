const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
// let items = [];

// ingredients.forEach((ingredient) => {
//   const ingredientItem = document.createElement("li");
//   ingredientItem.textContent = `${ingredient}`;
//   ingredientItem.classList.add("item");

//   items.push(ingredientItem);
// });

const items = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = `${ingredient}`;
  ingredientItem.classList.add("item");

  return ingredientItem;
});

ingredientsList.append(...items);
