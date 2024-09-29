<!-- TODO Add Dice sound effect -->
<!-- TODO make the image attributions dynamic -->
 <!-- TODO make a object for each player that is dynamicslly generate based on the numb of players -->
<!-- TODO Add, New game button, Save game?,  -->
<script>
  import PlayerCard from './components/PlayerCard.svelte'
  import Board from './components/Board.svelte'
  import DiceCheckEx from './components/DiceCheckEx.svelte'

  
</script>


<div class="display">
  <div class="left">
    <!-- Content for the left side 3/4 of screen -->
  <Board />
  <DiceCheckEx />

  </div>


  <div class="right">
    <!-- Content for the right side 1/4th of screen-->
    <div class="controls">

      <PlayerCard />
  </div>
  </div>
</div>



 



<style>
  




  /* Zoom control buttons */
  .controls {
    position:sticky;
    top: 20px;
    right: 20px;
  }

  

  

  .display {
    display: flex;
    height: 100vh; /* Full height of the viewport */
  }

  .left {
    flex: 3; /* Three parts of the screen */
    position: relative;
    height: 100vh;
    background-color: lightblue; /* For visual reference */
  }

  .right {
    flex: 1; /* One part of the screen */
    background-color: lightcoral; /* For visual reference */
  }

  /* button {
    margin: 5px;
    padding: 10px;
    cursor: pointer;
  } */
</style>
