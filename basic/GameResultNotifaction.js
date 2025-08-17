/*
✅ Q6. Game Result Notification
Create a gameResult(playerName, isWinner, onWin, onLose) function:

If isWinner === true, call onWin()

Else call onLose()
*/

function gameResult(playerName, isWinner, onWin,onLose) {
    console.log(`${playerName} started playing`);
    if(isWinner) {
        onWin()
    } else {
        onLose()
    }
}

gameResult("Param",false, function(){
    console.log("You Woon the game")
}, function () {
    console.log("You lose the game.....")
})
