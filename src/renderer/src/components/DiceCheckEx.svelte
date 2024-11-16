<script>
  import { onMount } from 'svelte'

  // Dice roll variables
  let currentDiceFace = 1 // Default dice face
  let currentDiceFace2 = 1
  let rolling = false // To simulate the rolling effect
  let rollSound

  // Dice faces array (you can customize this with SVGs or images)
  const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']
  // const exMark = '✘'

  // Function to handle rolling the dice
  function rollDice() {
    if (!rolling) {
      rolling = true

      // Play sound
      rollSound.play()

      // Simulate rolling effect
      const rollInterval = setInterval(() => {
        currentDiceFace = Math.floor(Math.random() * 6) + 1
      }, 100)

      // Stop rolling after 1 second
      setTimeout(() => {
        clearInterval(rollInterval)
        rolling = false
      }, 1000)
    }
  }

  function rollDice2() {
    if (!rolling) {
      rolling = true

      // Play sound
      rollSound.play()

      // Simulate rolling effect
      const rollInterval = setInterval(() => {
        currentDiceFace2 = Math.floor(Math.random() * 6) + 1
      }, 100)

      // Stop rolling after 1 second
      setTimeout(() => {
        clearInterval(rollInterval)
        rolling = false
      }, 1000)
    }
  }

  // Load the sound effect on mount
  onMount(() => {
    rollSound = new Audio('src/assets/dice-roll-sound.mp3')
  })
</script>

<div class="card">
  <div class="dice-check-ex">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore missing-declaration -->
    <div class="dice" on:click={rollDice}>
      {diceFaces[currentDiceFace - 1]}
    </div>
  </div>

  <div class="dice-check-ex">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore missing-declaration -->
    <div class="dice2" on:click={rollDice2}>
      {diceFaces[currentDiceFace2 - 1]}
    </div>
  </div>
  
</div>

<style>
  .dice-check-ex {
    bottom: 20px; 
    right: 20px;
    border-radius: 5px;
    color: black;
    justify-content: right;
  }

  /* Styling the dice */
  .dice {
    font-size: 8vh;
    cursor: pointer;
    user-select: none;
    display: inline-block;
    transition: transform 0.1s ease;
  }

  .dice2 {
    font-size: 8vh;
    cursor: pointer;
    user-select: none;
    display: inline-block;
    transition: transform 0.1s ease;
  }

  /* Rolling effect (makes the dice scale slightly) */
  .dice:active {
    transform: scale(0.90);
  }

  .card {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 20%;
    height: 10%;
    padding: 10px;
    position: absolute;
    bottom: 42.5%;
    left: 20px;
  }
</style>
