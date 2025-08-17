/*
Student Report Card
Create an object student with:

Name, roll number, marks in "Math", "Science", and "English".

Access "Math" marks using dot notation and "Science" marks using bracket notation.

Print: "Math marks: X, Science marks: Y".
*/

let student={
    name:"param",
    roll:101,
    marks:{
        math:78, science:88, english:45
    }
}
console.log(`Math marks: ${student.marks.math}`) // Math marks: 78
console.log(`Science Marks: ${student["marks"]["science"]}`) // Science Marks: 88