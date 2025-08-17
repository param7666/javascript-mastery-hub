/*
Objects:
========
object is a physical entity with attributes and methods
let obj_name={
    property1:value,
    peroperty2:value.....
}
objects contains data in key value pairs where keys contain property/method names and values contains property-values/method-definition

we can access the object values using dot notation or
index signature
dot notation: obj_name.property-name
index signature : obj_name['property-name']

*/

let person={  // object name is person
    name:"Param", // property = name and values ="Param"
    age:21,
    Phone:766684,
}

console.log(person) // { name: 'Param', age: 21, Phone: 766684 }
console.log(person.name) //Param
console.log(person.age) // 21
console.log(person.Phone) //766684