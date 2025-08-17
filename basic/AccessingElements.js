/*
. Accessing Elements
Access and print the first and last element from the array colors = ["Red", "Green", "Blue", "Yellow"].

If students = ["Raj", "Simran", "Aman"], print Simran from the array.

Given arr = [10, 20, 30, 40, 50], write a function to return the middle element.
*/

let colors=["Red", "Green", "Blue", "Yellow"]
console.log(colors[0]) // first element
console.log(colors[colors.length-1]) // last element

let students=["raj","Simran","Aman"]

if(students[0]=="raj" && students[1]=="Simran" && students[2]=="Aman") {
    for(let i=0;i<students.length;i++) {
    if(students[i]=="Simran") {
        console.log(students[i])
    } 
}

}

let arr = [10, 20, 30, 40, 50]

let midelElement=(arr)=> {
    console.log(arr[arr.length/2])
}
console.log(midelElement(arr))


