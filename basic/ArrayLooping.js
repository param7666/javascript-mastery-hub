/*
Step 5 – Looping Through Arrays (3 Questions)
✅ Print all items in the array
books = ["Math", "Science", "English"] using a for loop.

✅ Print each number multiplied by 2 from:
nums = [1, 2, 3, 4] using forEach.

✅ Write a function that takes an array of names and prints:
"Hello, <name>" for each one.
*/

let books  = ["Math", "Science", "English"]

for(let i=0;i<books.length;i++) {
    console.log(books[i]);
}

let nums = [1, 2, 3, 4]

nums.forEach((element)=>{
    console.log(element*2);
})

function printGreetWithName(names) {
    names.forEach((name)=> {
        console.log(`Hello, ${name}`)
    })
}

let names=["Param","Sundar","Baby","AdhiLakshi"]
printGreetWithName(names)