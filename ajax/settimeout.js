console.log("start");
setTimeout(()=>{
    console.log("Message after 3 second");
},3000);

console.log("End");

function fun(){
    console.log("Fun start");
    setTimeout(()=>{
        console.log("Fun after 4 second")
    },4000);
    console.log("fun end");
    
}

fun();