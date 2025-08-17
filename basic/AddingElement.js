/*
Adding Elements (3 Questions)
✅ Add "Orange" to the end of the array:
fruits = ["Apple", "Banana"]

✅ Add "Monday" to the start of the array:
weekdays = ["Tuesday", "Wednesday"]

✅ Write a function that:
Takes an array and a new item as input
Adds the new item only if it’s not already present in the array
Finally, print the updated array
*/

let fruits =["Apple","Banana"]
fruits.push("Orange") // push will help you to add element at the end of array
console.log(fruits) // [ 'Apple', 'Banana', 'Orange' ]

let weekdays=["Tuesday", "Wednesday"]
weekdays.unshift("Monday") // unshift will help to you to add element at the first 
console.log(weekdays) // [ 'Monday', 'Tuesday', 'Wednesday' ]

function addItemIfNotPresent(arr,element) {
    if(!arr.includes(element)) {
        arr.push(element)
    }
    console.log(arr)
}

addItemIfNotPresent(fruits,"Mango");