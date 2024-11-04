function playRock() {
    clear();
    play(0);
    document.getElementById("playerRock").innerHTML = "This works";
}
function playPaper() {
    clear();
    play(1);
    document.getElementById("playerPaper").innerHTML = "This works";
}
function playScissors() {
    clear();
    play(2);
    document.getElementById("playerScissors").innerHTML = "This works";

}

function play(player) {
    let enemyChoice = Math.floor(Math.random() * 3);
    console.log(enemyChoice);
    console.log("This is player " + player)

    if (enemyChoice === player) {
        document.getElementById("playerRock").innerHTML = "draw";
        document.getElementById("playerPaper").innerHTML = "draw";
        document.getElementById("playerScissors").innerHTML = "draw";

        document.getElementById("enemyRock").innerHTML = "draw";
        document.getElementById("enemyPaper").innerHTML = "draw";
        document.getElementById("enemyScissors").innerHTML = "draw";
    }
    else {
        document.getElementById("enemyRock").innerHTML = "This works";
    }
    /*
    if (enemyChoice % 3 === 0) {
        document.getElementById("enemyRock").innerHTML = "This works";
    }
    if (enemyChoice % 3 === 1) {
        document.getElementById("enemyPaper").innerHTML = "This works";
    }
    if (enemyChoice % 3 === 2) {
        document.getElementById("enemyScissors").innerHTML = "This works";
    }
        */

    
        
}

function clear() {

    document.getElementById("playerRock").innerHTML = "<br>";
    document.getElementById("playerPaper").innerHTML = "<br>";
    document.getElementById("playerScissors").innerHTML = "<br>";

    document.getElementById("enemyRock").innerHTML = "";
    document.getElementById("enemyPaper").innerHTML = "";
    document.getElementById("enemyScissors").innerHTML = "";
}