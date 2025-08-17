/*
Remove the last element from

let animals = ["Dog", "Cat", "Elephant"];
and print both the removed item and the updated array.

Remove the first element from

let numbers = [100, 200, 300, 400];
and print both the removed item and the updated array.

Write a function removeAtIndex(arr, index) that:
Removes the element at the given index using splice()
Prints the updated array
*/

let animals = ["Dog", "Cat", "Elephant"];
 let removed = animals.pop() // delete the last element and print
 console.log(removed)
console.log(animals) // updated animal

let numbers = [100, 200, 300, 400];
let removedNumber = numbers.shift() // delete the first element and print
console.log(removedNumber)
console.log(numbers) // updates numbers

function removeAtIndex(arr,index) {
    let removedITem= arr.splice(index,2);
    console.log(removedITem[0])
    console.log(arr)
}

removeAtIndex(numbers);