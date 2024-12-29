<script>
  import { onMount } from 'svelte'

  // let opCards = '/assets/OpCards/CoverUpright.webp'
  // let opCardAlt = 'Op cards'
  let verCards = '/assets/VerCards/Vcard.webp'
  let verCardAlt = 'Verse card'
  let showAlert = false

  let cardSound
  let closeSound

  function verCard() {
    showAlert = true
    cardSound.play()
  }

  function closeAlert() {
    closeSound.play()
    showAlert = false
  }

  // Load the sound effect on mount
  onMount(() => {
    cardSound = new Audio('/assets/SFX/notificationOther.mp3')
    closeSound = new Audio('/assets/SFX/cancel.mp3')
  })
</script>

<div class="card">
  <!-- <div class="image-container"> -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <img src={verCards} alt={verCardAlt} on:click={verCard} class="ops-card-cover" />
  <!-- </div> -->
  <!-- <div class="image-container"> -->
  <!-- <img src={verCards} alt={verCardAlt} class="ops-card-cover"/> -->
  <!-- </div> -->
</div>

{#if showAlert}
  <div class="custom-alert">
    <div class="alert-content">
      <p>Give the player the amount of physical verse cards specified.</p>
      <p>Once you have done so click "Okay".</p>
      <wbr/>
      <div class="alert-buttons">
        <button on:click={closeAlert}>Okay</button>
      </div>
    </div>
  </div>
{/if}



<style>
  /* .image-container {
    width: 1px;
    height: auto;
    aspect-ratio: 1 / 1;
  } */

  /* Rolling effect (makes the dice scale slightly) */

  img:active {
    transform: scale(0.95);
  }

  .card {
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    /* background-color: #f7f7f7;
    border: 1px solid #ddd; */
    border-radius: 10px;
    width: 15%;
    height: 10%;
    /* padding: 10px; */
    position: absolute;
    bottom: 24%;
    padding-bottom: 10px;
    padding-left: 8.8vw;
    /* left: 10px; */
  }

  img {
    width: auto;
    height: 12vh;
    aspect-ratio: 2 / 3;
  }

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

  .alert-buttons button {
    padding: 10px 70px;
    cursor: pointer;
    background-color: #444;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.2s;
  }

  .alert-buttons button {
    padding: 10px 20px;
    cursor: pointer;
  }

  .alert-buttons button:hover {
    background-color: #555;
  }


</style>
