const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

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