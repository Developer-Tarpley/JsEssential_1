const breakfastMenu = ['Pancakes- $12.00', 'Eggs Benedict- $22.99', 'Oatmeal- $21.99', 'Frittata- $15.00'];
const mainCourseMenu = ['Steak- $25.99', 'Pasta- $18.99', 'Burger- $14.00', 'Salmon- $25.00'];
const dessertMenu = ['Cake- $9.99', 'Ice Cream- $8.99', 'Pudding- $6.00', 'Fruit Salad- $11.99'];

// Mapping an array
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) =>{
    return `<p>Item ${index + 1}: ${item}</p>`;
}).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// using ForEach to iterate an array
let mainCourseItem = '';
mainCourseMenu.forEach((item, index)=>{
    return mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
})
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// using a for-loop to iterate an array
let dessertItem = '';
for(let i = 0; i < dessertMenu.length; i++){
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
