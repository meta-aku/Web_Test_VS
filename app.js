function playRock() {
    enemy();
    document.getElementById("playerRock").innerHTML = "This works";
}
function playPaper() {
    enemy();
    document.getElementById("playerPaper").innerHTML = "This works";
}
function playScissors() {
    enemy();
    document.getElementById("playerScissors").innerHTML = "This works";

}

function enemy() {
    let enemyChoice = Math.floor(Math.random() * 3);
    console.log(enemyChoice);
    if (enemyChoice % 3 === 0) {
        document.getElementById("enemyRock").innerHTML = enemyChoice + "This works";
    }
    if (enemyChoice % 3 === 1) {
        document.getElementById("enemyPaper").innerHTML = enemyChoice + "This works";
    }
    if (enemyChoice % 3 === 2) {
        document.getElementById("enemyScissors").innerHTML = enemyChoice + "This works";
    }
        
    
}