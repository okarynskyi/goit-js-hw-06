const category = document.querySelectorAll('.item');
console.log('Number of categories:', category.length);

category.forEach(el => {
    const nameCat = el.querySelector('h2');
    const numberEl = el.querySelectorAll('li');
    
    console.log(`Category: ${nameCat.textContent}`);
    console.log(`Elements: ${numberEl.length}`);
});
