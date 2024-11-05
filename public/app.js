// Todo
// Explain what is the difference between var, let and const?
let playerHealth = 100;
let enemyHealth = 100;
console.log("Player health" + playerHealth);
console.log("Enemy health" + enemyHealth);

// ToDo
// 1. Open tsconfig.json file and change "strict": false --> true
// 2. Fix TypeScript errors
// 3. Explain, what are these errors, and why do they happen
// 4. Open app.spec.ts -file and continue there
export function playRock() {
    clear();
    play(0);
    playerStatus();
    document.getElementById("playerRock").innerHTML = "Player's choice";
}
export function playPaper() {
    clear();
    play(1);
    playerStatus();
    document.getElementById("playerPaper").innerHTML = "Player's choice";
}
export function playScissors() {
    clear();
    play(2);
    playerStatus();
    document.getElementById("playerScissors").innerHTML = "Player's choice";
}
function play(playerChoice) {
    let enemyChoice = Math.floor(Math.random() * 3);
    console.log(enemyChoice);
    console.log("This is player " + playerChoice);
    console.log("Player health in function " + playerHealth);
    console.log("Enemy health in function " + enemyHealth);
    if (enemyChoice % 3 === 0) {
        document.getElementById("enemyRock").innerHTML = "Enemy's choice";
    }
    else if (enemyChoice % 3 === 1) {
        document.getElementById("enemyPaper").innerHTML = "Enemy's choice";
    }
    else {
        document.getElementById("enemyScissors").innerHTML = "Enemy's choice";
    }
    if (enemyChoice === playerChoice) {
        document.getElementById("playerRock").innerHTML = "DRAW";
        document.getElementById("playerPaper").innerHTML = "DRAW";
        document.getElementById("playerScissors").innerHTML = "DRAW";
        document.getElementById("enemyRock").innerHTML = "DRAW";
        document.getElementById("enemyPaper").innerHTML = "DRAW";
        document.getElementById("enemyScissors").innerHTML = "DRAW";
        document.getElementById("enemyComplete").innerHTML = "DRAW";
        document.getElementById("playerComplete").innerHTML = "DRAW";
    }
    else {
        /*
        0 == rock
        1 == paper
        2 == scissors
        
        */
        if (playerChoice == 0 && enemyChoice == 1) {
            document.getElementById("playerComplete").innerHTML = "LOST";
            document.getElementById("enemyComplete").innerHTML = "WON";
            playerHealth = playerHealth -10;
            
            
        }
        else if (playerChoice == 0 && enemyChoice == 2) {
            document.getElementById("playerComplete").innerHTML = "WON";
            document.getElementById("enemyComplete").innerHTML = "LOST";
            enemyHealth = enemyHealth - 10;
        }
        else if (playerChoice == 1 && enemyChoice == 0) {
            document.getElementById("playerComplete").innerHTML = "WON";
            document.getElementById("enemyComplete").innerHTML = "LOST";
            enemyHealth = enemyHealth - 10;
        }
        else if (playerChoice == 1 && enemyChoice == 2) {
            document.getElementById("playerComplete").innerHTML = "LOST";
            document.getElementById("enemyComplete").innerHTML = "WON";
            playerHealth = playerHealth - 10;
        }
        else if (playerChoice == 2 && enemyChoice == 0) {
            document.getElementById("playerComplete").innerHTML = "LOST";
            document.getElementById("enemyComplete").innerHTML = "WON";
            playerHealth = playerHealth - 10;
        }
        else {
            document.getElementById("playerComplete").innerHTML = "WON";
            document.getElementById("enemyComplete").innerHTML = "LOST";
            enemyHealth = enemyHealth - 10;
        }
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
function playerStatus() {
    document.getElementById("playerHealth").innerHTML = "Health: " + playerHealth;
    document.getElementById("enemyHealth").innerHTML = "Health: " + enemyHealth;

    if (playerHealth <= 50) {
        
        document.getElementById("playerHealth").style.setProperty('--background-color', 'rgb(250, 254, 0)');
    } 
    
    if (playerHealth <= 20) {
        
        document.getElementById("playerHealth").style.setProperty('--background-color', 'rgb(217, 9, 82)');
        document.getElementById("playerHealth").style.setProperty('--color', 'white');
        document.getElementById("playerHealth").style.setProperty('--font-family', 'Helvetica');
    }

    if (enemyHealth <= 50) {

        document.getElementById("enemyHealth").style.setProperty('--background-color', 'rgb(250, 254, 0)');
     
    }
    
    if (enemyHealth <= 20) {
        
        document.getElementById("enemyHealth").style.setProperty('--background-color', 'rgb(217, 9, 82)');
        document.getElementById("enemyHealth").style.setProperty('--color', 'white');
        document.getElementById("enemyHealth").style.setProperty('--font-family', 'Helvetica');
    }
}
window.playRock = playRock;
window.playPaper = playPaper;
window.playScissors = playScissors;