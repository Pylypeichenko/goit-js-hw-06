const categoriesEl = document.querySelectorAll("li.item");
console.log("Number of categories: ", categoriesEl.length);

categoriesEl.forEach((category) => {
  console.log("Category: ", category.firstElementChild.textContent);

  const exemplesEl = category.lastElementChild.children;
  console.log("Elements: ", exemplesEl.length);
});
