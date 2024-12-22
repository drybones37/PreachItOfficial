
<!-- TODO make the pieces appear on the board TODO
  -->

<!-- lower Make trains appear more reasonably -->

<script>
  import PlayerCard from './components/PlayerCard.svelte'
  import Board from './components/Board.svelte'
  import DiceCheckEx from './components/DiceCheckEx.svelte'
  import Timer from './components/Timer.svelte'
  import OpCard from './components/OpCard.svelte'
  import ArgCard from './components/ArgCard.svelte'
  import VerCard from './components/VerCard.svelte'

  import BagOfCharacters from './components/BagOfCharacters.svelte'

  import { rulesSummaryText } from './logic/RulesSummary.js'
  import { ruleBookText } from './logic/RuleBook.js'
  import { appText } from './logic/Appinstruct.js'
  import { onMount } from 'svelte'
  

  // let showAlert = false
  let gameRuleBook = false
  let gameRulesSum = false
  let appInstructions  = false
  let saveGameNotifier  = false

  let cardSound
  let closeSound
  

  // function newGame() {
  //   showAlert = true
    
  // }

  function gRulesS() {
    gameRulesSum = true
    cardSound.play()
  }

  

  function appInstruct(){
    appInstructions = true
    cardSound.play()
  }
  
  function gRuleBook() {
    gameRuleBook = true
    cardSound.play()
  } 

  function closeAlert() {
    
    // showAlert = false
    gameRuleBook = false
    gameRulesSum = false
    saveGameNotifier = false
    appInstructions = false
    closeSound.play()
  }

  function saveGame() {
    saveGameNotifier = true
    cardSound.play()
  }
  

 onMount(() => {
    cardSound = new Audio('./src/assets/SFX/blip.mp3')
    closeSound = new Audio('./src/assets/SFX/cancel.mp3')
  })
  
</script>


{#if gameRulesSum}
  <div class="custom-alert">
    <div class="alert-content">
      <h3>Summary:</h3>
      <div class="rules-summary">
        <pre>{rulesSummaryText}</pre>
      </div>
      <div class="alert-buttons" style="padding-top: 15px;">
        <button on:click={closeAlert}>Finished</button>
      </div>
    </div>
  </div>
{/if}

{#if gameRuleBook}
  <div class="custom-alert">
    <div class="alert-content">
      <h3>PREACH IT! RULE BOOK:</h3>
      <div class="rules-summary">
        <pre>{ruleBookText}</pre>
      </div>
      <div class="alert-buttons" style="padding-top: 15px;">
          <button on:click={closeAlert}>Finished</button>
      </div>
    </div>
  </div>
  {/if}


  {#if appInstructions}
  <div class="custom-alert">
      <div class="alert-content">
	  <h3>App Instructions</h3>
	  <div class="rules-summary">
              <pre>{appText}</pre>
	  </div>
	  <div class="alert-buttons" style="padding-top: 15px;">
              <button on:click={closeAlert}>Finished</button>
	  </div>
      </div>
  </div>
  {/if}

  {#if saveGameNotifier}
  <div class="custom-alert">
      <div class="alert-content">
	  <h3>Please Take a Screenshot of the Game</h3>

	 	  <div class="alert-buttons" style="padding-top: 15px;">
              <button on:click={closeAlert}>Okay</button>
	  </div>
      </div>
  </div>
  {/if}

<!-- {#if selectedNumber}
  <p>You selected: {selectedNumber}</p>
{/if} -->

<div class="top">
  <nav class="top-bar">
    <button class="save-game-button" on:click={saveGame}> Save Game </button>

    <button class="load-game-button" on:click={appInstruct}> App Instructions </button>
    <button class="load-game-button" on:click={gRuleBook}> Game Rules </button>
    <button class="load-game-button" on:click={gRulesS}> Rules Summary </button>
    <!-- <button class="load-game-button" on:click={loadGame}> Remove Pieces </button> -->
  </nav>

  <div class="display">
    <div class="left">
      <!-- Content for the left side 3/4 of screen -->
      <Board />
      <BagOfCharacters />

      <!-- <DragNDrop/> -->
      <!-- <Train1 />
       <Train2 /> -->
      <DiceCheckEx />
      <OpCard />
      <VerCard />
      <ArgCard />
      <Timer />
    </div>

    <div class="right">
      <!-- Content for the right side 1/4th of screen-->
      <!-- <div class="controls"> -->
      <PlayerCard />
      <!-- </div> -->
    </div>
  </div>
</div>

<style>
  .rules-summary {
  text-align: left;
  width: 65vw; /* Set width to 75% of the screen */
  max-height: 70vh; /* Limit the height to 60% of the viewport height */
  overflow-x: auto; /* Add a vertical scroll bar if content overflows */
  margin: 0 auto; /* Center the div horizontally */
  padding: 10px; /* Add some padding */
  background-color: #484646; /* Optional: Add a background color for better visibility */
  color: #fff; /* Text color */
  border: 1px solid #444; /* Optional: Add a border for separation */
  border-radius: 5px; /* Optional: Add rounded corners */
  word-wrap: break-word; /* Ensure long words wrap to the next line */
  white-space: pre-wrap; /* Preserve whitespace but allow wrapping */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: Add a subtle shadow */
}

  /* General button styles */
  
  .load-game-button,
  .save-game-button {
    background-color: #44444400;
    color: #fff;
    border: none;
    height: 4vh;
    font-size: 12px;
    cursor: pointer;
    z-index: 1;
  }

  
  .load-game-button:hover,
  .save-game-button:hover {
    background-color: #555;
  }

  /* Custom alert styles */
  .custom-alert {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure it's on top */
  }

  .alert-content {
    background-color: rgb(36, 35, 35);
    justify-content: space-evenly;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    color: rgb(255, 255, 255);
  }

  /* .alert-content input {
    width: 20vw;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 15px;
  } */

  .alert-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .alert-buttons button {
    padding: 10px 20px;
    cursor: pointer;
  }

  .alert-buttons button:hover {
    background-color: #ddd;
  }

  /* Layout settings */
  .display {
    display: flex;
    height: 100vh; /* Full height of the viewport */
  }

  /* .controls {
    position: sticky;
   
  } */

  .left {
    flex: 3; /* Three parts of the screen */
    position: relative;
    height: 95vh;
    background-color: powderblue; /* For visual reference */
  }

  .right {
    position: relative;
    flex: 1; /* One part of the screen */
    background-color: salmon; /* For visual reference */
    height: 95vh;
    width: 100vw;
  }

  .top-bar {
    position: sticky;
    height: 4vh;
    background-color: #333;
    z-index: 1;
  }

  .top {
    position: sticky;
    top: 0;
    z-index: 1;
  }
</style>
