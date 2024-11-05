function playRock() {
    clear();
    play(0);
    document.getElementById("playerRock").innerHTML = "Player's choice";
}
function playPaper() {
    clear();
    play(1);
    document.getElementById("playerPaper").innerHTML = "Player's choice";
}
function playScissors() {
    clear();
    play(2);
    document.getElementById("playerScissors").innerHTML = "Player's choice";

}

function play(player) {
    let enemyChoice = Math.floor(Math.random() * 3);
    console.log(enemyChoice);
    console.log("This is player " + player);

    if (enemyChoice === player) {
        document.getElementById("playerRock").innerHTML = "DRAW";
        document.getElementById("playerPaper").innerHTML = "DRAW";
        document.getElementById("playerScissors").innerHTML = "DRAW";

        document.getElementById("enemyRock").innerHTML = "DRAW";
        document.getElementById("enemyPaper").innerHTML = "DRAW";
        document.getElementById("enemyScissors").innerHTML = "DRAW";

        document.getElementById("enemyComplete").innerHTML = "DRAW";
        document.getElementById("playerComplete").innerHTML = "DRAW";

    }

    else if (enemyChoice % 3 === 0) {
        document.getElementById("enemyRock").innerHTML = "Enemy's choice";
    }
    else if (enemyChoice % 3 === 1) {
        document.getElementById("enemyPaper").innerHTML = "Enemy's choice";
    }
    else if (enemyChoice % 3 === 2) {
        document.getElementById("enemyScissors").innerHTML = "Enemy's choice";
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

    document.getElementById("enemyComplete").innerHTML = "<br>";
        document.getElementById("playerComplete").innerHTML = "<br>";
}