console.log("hello");

function demo(name) {
    setTimeout(()=>{
        console.log("Hello ",name)
    },4000)
}

demo("Param");

function demo2(name){
    console.log("I lOve You ",name);
}

setTimeout(demo2,3000,"param"); // call the method inside setTimeout with param
// param argument passed to demo2 
// 3000 is time
// demo2 is function