function playRock() {
    let player = 0
    clear();
    play();
    document.getElementById("playerRock").innerHTML = "This works";
}
function playPaper() {
    let player = 1
    clear();
    play();
    document.getElementById("playerPaper").innerHTML = "This works";
}
function playScissors() {
    let player = 2
    clear();
    play();
    document.getElementById("playerScissors").innerHTML = "This works";

}

function play() {
    let enemyChoice = Math.floor(Math.random() * 3);
    console.log(enemyChoice);
    if (enemyChoice % 3 === 0) {
        document.getElementById("enemyRock").innerHTML = "This works";
    }
    if (enemyChoice % 3 === 1) {
        document.getElementById("enemyPaper").innerHTML = "This works";
    }
    if (enemyChoice % 3 === 2) {
        document.getElementById("enemyScissors").innerHTML = "This works";
    }

    
        
}

function clear() {

    document.getElementById("playerRock").innerHTML = "<br>";
    document.getElementById("playerPaper").innerHTML = "<br>";
    document.getElementById("playerScissors").innerHTML = "<br>";

    document.getElementById("enemyRock").innerHTML = "";
    document.getElementById("enemyPaper").innerHTML = "";
    document.getElementById("enemyScissors").innerHTML = "";
}