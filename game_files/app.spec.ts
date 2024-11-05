import {playRock} from './app.ts'

describe('app', () => {

  beforeEach(()=> {
    // Set up the necessary DOM elements
    document.body.innerHTML = `
      <div id="playerRock"></div>
      <div id="playerPaper"></div>
      <div id="playerScissors"></div>
      <div id="enemyRock"></div>
      <div id="enemyPaper"></div>
      <div id="enemyScissors"></div>
      <div id="enemyComplete"></div>
      <div id="playerComplete"></div>
      <div id="playerHealth"></div>
      <div id="enemyHealth"></div>
    `
    
  })

    it('should call clear, play and playerStatus functions', ()=> {
         playRock()
         const playerRockElement = document.getElementById('playerRock');
         expect(playerRockElement).not.toBeNull();
         expect(playerRockElement!.innerHTML).toBe("Player's choice");
    })

    // ToDo Write tests for

    // 1.  PlayPaper

    // 2.  PlayScissors

    // Extra 3. Refactor play -function, and write tests for it
})