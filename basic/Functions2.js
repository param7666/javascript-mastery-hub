/*
callback functions:  
  A function that is passed as a argument to another function and then outer function may call it later is called callback function. 
  function xx(){
    console.log("i'm X")
}
function y(k){
    k();
    k();
    k();
}

*/

function greet(name,callback) {
    console.log("Hello ",name)
    callback()
}

function message() {
    console.log("Good morning.......")
}

greet("Param",message)
