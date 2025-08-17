
let student={
    name:"Param",
    rollNo:101,
    work: function()  {
        return "Study is work"
    }
}

console.log(student)
console.log(student.work()) // study is work
console.log(Object.keys(student)) // [ 'name', 'rollNo', 'work' ]
console.log(Object.values(student)) // [ 'Param', 101, [Function: work] ]
console.log(Object.entries(student)) 
/*
 [
  [ 'name', 'Param' ],
  [ 'rollNo', 101 ],
  [ 'work', [Function: work] ]
] 
  
*/