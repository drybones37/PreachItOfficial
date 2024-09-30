<!-- TODO Add Dice sound effect -->
<!-- TODO make a object for each player that is dynamicslly generate based on the numb of players -->
<!-- TODO Highlight the person's card whose turn it is. -->
<!-- TODO make the Opportunity Cards clickable so they can be used -->
<!--TODO Add another dice  -->
<!-- TODO Make a new game tab. -->
<!-- TODO Make a start screen -->

<script>
  import PlayerCard from './components/PlayerCard.svelte'
  import Board from './components/Board.svelte'
  import DiceCheckEx from './components/DiceCheckEx.svelte'
  import Timer from './components/Timer.svelte'

  function newGame() {
    // Add logic to start a new game here
  }

  function loadGame() {
    // Add logic to load a saved game here
  }

  function saveGame(){

  }


</script>



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
  /* Zoom control buttons */
  .controls {
    position: sticky;
    /* top: 20px; */
    /* right: 20px; */
  }

  .display {
    display: flex;
    height: 100vh; /* Full height of the viewport */
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
    /* top: 0; */
    /* left: 0; */
    /* width: 100vw; */
    height: 4vh;
    background-color: #333;
    /* align-self:flex-start; */
    z-index: 1;
  }

  .top{
    position:sticky;
    top: 0;
    z-index: 1;
  }

  .new-game-button, .load-game-button, .save-game-button {
    position:sticky;
    background-color: #44444400;
    color: #fff;
    border: none;
    /* padding: 10px 20px; */
    height: 4vh;
    font-size: 12px;
    cursor: pointer;
    z-index: 1;
  }

  .new-game-button:hover, .load-game-button:hover, .save-game-button:hover {
    background-color: #555;
  }
</style>
