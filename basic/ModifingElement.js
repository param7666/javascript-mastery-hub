/*
Modifying Elements (3 Questions)
Change the third element of arr = [1, 2, 3, 4] to 99.

Update the first student name in students = ["Anil", "Pooja", "Ravi"] to "Sunil".

Write a function that takes an array and an index, and updates the value at that index to a new value.


*/

let arr = [1, 2, 3, 4]
arr[2]=99; // updated 3rd element
console.log(arr) //[ 1, 2, 99, 4 ]

let students = ["Anil", "Pooja", "Ravi"]
students[0]="Sunil"; // updated 1st student
console.log(students) // [ 'Sunil', 'Pooja', 'Ravi' ]

function updateValues(x,newValue,array) {
    console.log(`Orignal Array ${array}`) // Orignal Array Param,Sundar,Sakshi,Mayuri
    array[x]=newValue; // updated array at x index with newValue
    console.log(array) // [ 'Param', 'Sundar', 'Sakshi', 'Ishwar' ]
}

let names=["Param","Sundar","Sakshi","Mayuri"]

updateValues(3,"Ishwar",names)



