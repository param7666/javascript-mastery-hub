/*
Array Length (3 Questions)
✅ Find and print the number of items in:
shoppingCart = ["Milk", "Bread", "Butter"]
✅ Check if an array has more than 5 items or not.
✅ Write a function that:
Takes any array as input
Returns "Too Short" if length < 3
Returns "Sufficient" if length >= 3
*/

let shoppingCart = ["Milk", "Bread", "Butter"]
console.log(shoppingCart.length) // 3

// function to check array has more than 5 element
function checkLen(shoppingCart) {
    if(shoppingCart.length>5) return true;
    else return false;
}
console.log(checkLen(shoppingCart)); //false

function printMessageBasedOnSize(shoppingCart) {
    if(shoppingCart.length<3) return "Too Short";
    else return "Sufficient";
}

console.log(printMessageBasedOnSize(shoppingCart)) //Sufficient

