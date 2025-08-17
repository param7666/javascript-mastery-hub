/*
✅ Q1. Birthday Party Invite
Scenario:
Tumhare paas ek invitePeople() function hai jo logon ko bulata hai. Baad mein unhe kya bolna hai, wo callback se decide hoga.

Task:
Create a function invitePeople(name, callback)

It should print Inviting: <name>

Then call the callback
*/


function invitePeople(name, callback) {
    console.log("Dear ",name)
    callback()
}

function message() {
    console.log("You are invited to birthday party...")
}

function reject() {
    console.log("Please Dont come to party")
}

invitePeople("Param",message)
invitePeople("Param",reject)