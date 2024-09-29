<script>
  import { onMount } from 'svelte'

  // Dice roll variables
  let currentDiceFace = 1 // Default dice face
  let rolling = false // To simulate the rolling effect
  let rollSound

  // Dice faces array (you can customize this with SVGs or images)
  const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

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
</div>

<style>
  .dice-check-ex {
    /* position: absolute; */
    bottom: 20px; /* adjust the bottom margin to your liking */
    right: 20px;
    padding: 10px;
    border-radius: 5px;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
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

  /* Rolling effect (makes the dice scale slightly) */
  .dice:active {
    transform: scale(0.95);
  }

  .card {
    position: absolute;
    bottom: 20px; /* adjust the bottom margin to your liking */
    right: 20px;
    height: 10px;
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    border-radius: 10px;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    margin-bottom: 0px;

    display: flex;
    justify-content: space-between; /* Distribute the items evenly */
    align-items: center;
    width: 25%;
    height: 10%;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  }
</style>
