let item1;
let item2;
let item3;

function calculateGroceries(){
    item1 = parseFloat(document.getElementById("grocery-1").value);
    item2 = parseFloat(document.getElementById("grocery-2").value);
    item3 = parseFloat(document.getElementById("grocery-3").value);

    let amount = item1 + item2 + item3;

    document.getElementById("total").innerText = `Your total amount is :$ ${amount}`;
}