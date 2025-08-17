/*
✅ Q2. Login System
Scenario:
Tum ek login system bana rahe ho. Agar login success ho, toh onSuccess() callback chalayega. Agar fail ho, toh onFail() callback chalayega.

Task:

Create a login(username, password, onSuccess, onFail) function

If username is "admin" and password is "1234", call onSuccess()

Else call onFail()
*/

function login(username, password, onSuccess, onFail){
    if(username==="admin" && password ==="password") {
        onSuccess()
    } else {
        onFail()
    }
}

function onFail() {
    console.log("Login Fail...")
}

function onSuccess() {
    console.log("Login Success......")
}

login("admin","password",onSuccess,onFail) // login Success.....
login("admin","password123",onSuccess,onFail) // login Fail.....