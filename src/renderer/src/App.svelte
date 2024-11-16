<!-- TODO Make a bowl that I can click to auto add player pieces to the board and drag and drop list. -->
<!-- TODO add sound effects -->

<script>
  import PlayerCard from './components/PlayerCard.svelte'
  import Board from './components/Board.svelte'
  import DiceCheckEx from './components/DiceCheckEx.svelte'
  import Timer from './components/Timer.svelte'
  import OpCard from './components/OpCard.svelte'
  import ArgCard from './components/ArgCard.svelte'
  import BagOfCharacters from './components/BagOfCharacters.svelte'


  let showAlert = false

  function newGame() {
    showAlert = true
  }

  function resetGameData() {
    // TODO Make a reset function that clears all game data
    showAlert = false
  }

  function closeAlert() {
    
    showAlert = false
  }

  function loadGame() {
    // Add logic to load a saved game here
  }

  function saveGame() {}
</script>

{#if showAlert}
  <div class="custom-alert">
    <div class="alert-content">
      <p>Are you sure you want to reset all game data?</p>
      <p>If so click "Yes".</p>
      <wbr/>
      <div class="alert-buttons">
        <button on:click={resetGameData}>Yes</button>
        <button on:click={closeAlert}>Cancel</button>
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
    <button class="new-game-button" on:click={newGame}> New Game </button>
    <button class="load-game-button" on:click={loadGame}> Load Game </button>
    <button class="load-game-button" on:click={loadGame}> App Instructions </button>
    <button class="load-game-button" on:click={loadGame}> Game Rules </button>
    <button class="load-game-button" on:click={loadGame}> Rules Summary </button>
    <button class="load-game-button" on:click={loadGame}> Remove Pieces </button>
  </nav>

  <div class="display">
    <div class="left">
      <!-- Content for the left side 3/4 of screen -->
      <Board />
      <!-- <DragNDrop/> -->
      <DiceCheckEx />
      <OpCard />
      <ArgCard />
      <Timer />
      <BagOfCharacters />
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
  .new-game-button,
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

  .new-game-button:hover,
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

  .alert-content input {
    width: 20vw;
    padding: 10px;
    /* padding-top: 10px; */
    margin-bottom: 10px;
    font-size: 15px;
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


