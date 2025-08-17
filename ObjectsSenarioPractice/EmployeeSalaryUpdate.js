/* Employee Salary Update
Create an object employee with name, position, and salary.
Write a function that:

Accepts the property name as a parameter.

Updates its value in the employee object using bracket notation. */

var employee ={
 name:"Ramesh", 
 position:"Developer",
 salary:25300
}

function updateName(newName) {
    employee.name=newName;
    console.log("updated employee detail ",employee) 
    //updated employee detail  { name: 'Param', position: 'Developer', salary: 25300 }

}

updateName("Param"); // function call