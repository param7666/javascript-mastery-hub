let monkey={
    name:"alice",
    age:20,
    work:function() {
        console.log("Bho Bho")
    }
}

let keyName="name"; // keyname variable holds the name property
console.log(monkey[keyName]); //Alice

let student= {
    "first name":"Rahul" // key contains space
}

console.log(student["first name"]) // Rahul

let scores = {
    1: "Gold Medal",
    2: "Silver Medal"
};

console.log(scores[1]); // Gold Medal
console.log(scores["2"]); // Silver Medal

let car = { brand: "Toyota", model: "Camry", year: 2020 };

for (let key in car) {
    console.log(key, car[key]); // bracket notation lets us use variable keys
}
