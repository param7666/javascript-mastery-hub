/*
Scenario:
Ek student test submit karta hai, uske baad result callback ke through dikhega.

Task:

Create submitTest(studentName, callback)

Print "Test submitted by: <studentName>"

Call callback to print "Result will be announced soon"
*/

function submitTest(name, callback) {
    console.log(`Test submited by ${name}`)
    setTimeout(function(){
        callback()
    },2000)
}

submitTest("Param",function(){
    console.log("Result will be announed soon....")
})