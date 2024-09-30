<script>
  import PlayerCard from './components/PlayerCard.svelte'
  import Board from './components/Board.svelte'
  import DiceCheckEx from './components/DiceCheckEx.svelte'
  import Timer from './components/Timer.svelte'

  let showAlert = false;
  let userInput = ""; // Store user input
  let selectedNumber = ""; // Store the final selected number

  function newGame() {
    showAlert = true;
  }

  function closeAlert() {
    if (userInput) {
      selectedNumber = userInput; // Store the input when alert is closed
    }
    showAlert = false;
  }

  function loadGame() {
    // Add logic to load a saved game here
  }

  function saveGame() {

  }
</script>

{#if showAlert}
  <div class="custom-alert">
    <div class="alert-content">
      <p>Enter a number between 2 and 8:</p>
      <input
        type="number"
        min="2"
        max="8"
        bind:value={userInput}
        placeholder="Enter a number"
      />
      <div class="alert-buttons">
        <button on:click={closeAlert}>OK</button>
      </div>
    </div>
  </div>
{/if}

<!-- {#if selectedNumber}
  <p>You selected: {selectedNumber}</p>
{/if} -->

<div class="top">
  <nav class="top-bar">
    <button class="save-game-button" on:click={saveGame}>
      Save Game
    </button>
    <button class="new-game-button" on:click={newGame}>
      New Game
    </button>
    <button class="load-game-button" on:click={loadGame}>
      Load Game
    </button>
  </nav>
  
  <div class="display">
    <div class="left">
      <!-- Content for the left side 3/4 of screen -->
      <Board />
      <DiceCheckEx />
      <Timer />
    </div>

    <div class="right">
      <!-- Content for the right side 1/4th of screen-->
      <div class="controls">
        <PlayerCard />
      </div>
    </div>
  </div>
</div>

<style>
  /* General button styles */
  .new-game-button, .load-game-button, .save-game-button {
    background-color: #44444400;
    color: #fff;
    border: none;
    height: 4vh;
    font-size: 12px;
    cursor: pointer;
    z-index: 1;
  }

  .new-game-button:hover, .load-game-button:hover, .save-game-button:hover {
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
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  .alert-content input {
    width: 100px;
    padding: 5px;
    margin-bottom: 10px;
  }

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

  .controls {
    position: sticky;
    /* top: 20px; */
    /* right: 20px; */
  }

  .left {
    flex: 3; /* Three parts of the screen */
    position: relative;
    height: 95vh;
    background-color: lightblue; /* For visual reference */
  }

  .right {
    flex: 1; /* One part of the screen */
    background-color: lightcoral; /* For visual reference */
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
