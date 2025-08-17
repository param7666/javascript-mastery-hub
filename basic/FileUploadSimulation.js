/*
✅ Q3. File Upload Simulation
Scenario:
File upload hone ke baad hume success message dikhana hai. Callback se wo kaam karenge.

Task:

Create a function uploadFile(fileName, callback)

Print: "Uploading <fileName>..."

Then simulate a 2 second delay using setTimeout

After 2 seconds, call the callback
*/

function uploadFile(fileName, callback) {
    console.log("Uploading ",fileName)
    setTimeout(function(){
        console.log("File upload Successfull..")
        callback()
    },2000)
}

uploadFile("myFile",function(){
    console.log("Now You can view the file")
});

