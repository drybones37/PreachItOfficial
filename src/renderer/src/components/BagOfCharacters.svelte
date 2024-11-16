<script>
  import { onMount } from 'svelte'

  let bagSound
  let bagImgs = 'src/assets/BagOfCharac.webp'
  let bagImgAlt = 'Bag of characters'

  function openBag() {
    // Play sound
    bagSound.play()
  }
  // Load the sound effect on mount
  onMount(() => {
    bagSound = new Audio('src/assets/dice-roll-sound.mp3')
  })
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card" on:click={openBag}>
  <!-- <div class="image-container"> -->
  <img src={bagImgs} alt={bagImgAlt} class="ops-card-cover" />
</div>

<style>
  img:active {
    transform: scale(0.95);
  }

  .card {
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    border-radius: 10px;
    width: 20%;
    height: 10%;
    position: absolute;
    bottom: 80%;
    padding-bottom: 10px;
    padding-left: 15px;
  }

  img {
    width: auto;
    height: 24vh;
    aspect-ratio: 1/1;
  }
</style>
