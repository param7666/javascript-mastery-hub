//Executes a function repeatedly after a given interval (in milliseconds).


// setInterval(() => {
//     console.log("hello")
// }, 3000);

let count=1;

let timer = setInterval(()=>{
    console.log("Ping ",count); // print the count
    count++; // increase the count
    if(count>=5) {
        clearInterval(timer); // stop the timer 
    }
},1000) // execute after 1 sec