const categoriesList = document.querySelector('#categories');

const items = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${items.length}`);


items.forEach((item) => {
  const title = item.querySelector('h2').textContent;

  const elements = item.querySelectorAll('li');

  console.log(`\nCategory: ${title}`);
  console.log(`Elements: ${elements.length}`);
});