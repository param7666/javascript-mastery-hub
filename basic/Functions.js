function display() {
    console.log("Hii Form noraml function...")
}

display()

function display2(a, b) {
    let sirname="Gurlewad..."
    console.log("Name",a);
    console.log("Phone",b);
    console.log("Sirname ",sirname);
}

display2("Param",7666);


function sum(a,b) {
    console.log("Sum Function......")
    console.log(a+b);
    
}
sum(5);
sum(5,5);
sum(5,"Hello");

function sum2(a,b=5) {
    console.log("Sum2 function")
    console.log(a+b);
}

sum2(4);

/* create a function to return taxiFare which accepts no_of_kilometers and price per kilometer as parameters. In case of price per kilometer absence, default charge is ₹40 */
function myFunction(a, b=40) {
	// Function returns the product of a and b
	return a * b
}
let x = myFunction(4)
let y=myFunction(4,50)
console.log("₹" + x)
console.log("₹" + y)

/* we can manage no.of parameters by rest operator */
/* rest operator is used to accept values in the form of array as they are rest of values
rest operator is denoted by three dots and always rest operator should be the last parameter*/
/* spread operator is used to spread the values. it is also denoted by three dots */
function sum5 (a,...p)
{
    let arr=[2,5,...p,6,7]//[2,5,"shekhar","geetha","seetha"]
    console.log(p,arr)
 
}
//sum5("raj", "shekhar", "geetha", "seetha")

function restFunction(a, ...rest) { //a = mahesh,  ...rest = 'Shekar', 'Param', 'Sundar', 'Someone'
    let arr=[...rest]; // 'Shekar', 'Param', 'Sundar', 'Someone'
    console.log(a) // mahesh
    console.log(arr,rest); // [ 'Shekar', 'Param', 'Sundar', 'Someone' ] [ 'Shekar', 'Param', 'Sundar', 'Someone' ]
}
restFunction("Mahesh","Shekar","Param","Sundar","Someone");


// senario based practice question
// giftDistrubutation 

function giftDistrubutation(specialGuest, ...regularGuest) {
    console.log("special gift goes to :: "+specialGuest)
    console.log("Regular Gift goes to ::",regularGuest)
}

giftDistrubutation("Ananya", "Ravi", "Meena", "Amit", "Sneha");


/* a function also be considered as variable */
function myFun ()
{
    console.log("simple function")
}
console.log(myFun)

function veriableFunction() {
    console.log("THis is function..")
}

console.log(veriableFunction); // [Function: veriableFunction]
console.log(veriableFunction()); // function execute and output is undefined


// we can also write as function expression
let myFun2 = function ()
{
        console.log("simple function 2")
}
console.log(myFun2)
myFun2()

let myFun3=function() {
 console.log("simple function 3")
}

console.log(myFun3())
myFun3()

/* write a function sum which takes two numbers and returns their sum */
function sum(x,y) {
    console.log(`sun of ${x} and ${y} is ${x+y}`)
}
sum(5,10); // sun of 5 and 10 is 15


