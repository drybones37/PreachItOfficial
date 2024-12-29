<script>
  import { onMount } from 'svelte'
  // import { yellowList } from './ArgcardData.svelte'
  
  // SFX
  // import blipSound from './assets/SFX/blip.mp3';
  // import cancelSound from './assets/SFX/cancel.mp3';

  // Select a random element

  // let opCards = '/assets/OpCards/CoverUpright.webp'
  // let opCardAlt = 'Op cards'
  let argCards = '/assets/ArgCards/RedACCover.webp'
  let argCardsor = '/assets/ArgCards/OrangeACCover.webp'
  let argCardsye = '/assets/ArgCards/YellowACCover.webp'
  let displayCard = ''
  let argCardAlt = 'Arg cards'
  let showAlertarg = false
  let showAlertspec = false

  
  

  let cardSound
  let closeSound

  function argCard() {
    showAlertarg = true
    cardSound.play()
  }

  

  // Load the sound effect on mount
  onMount(() => {
    cardSound = new Audio('/assets/SFX/flipcard.mp3')
    closeSound = new Audio('/assets/SFX/cancel.mp3')
  })

  const orangeList = [
    '/assets/ArgCards/OrangeCC10.webp',
    '/assets/ArgCards/OrangeCC11.webp',
    '/assets/ArgCards/OrangeCC12.webp',
    '/assets/ArgCards/OrangeCC13.webp',
    '/assets/ArgCards/OrangeCC14.webp',
    '/assets/ArgCards/OrangeCC15.webp',
    '/assets/ArgCards/OrangeCC16.webp',
    '/assets/ArgCards/OrangeCC17.webp',
    '/assets/ArgCards/OrangeCC18.webp',
    '/assets/ArgCards/OrangeCC19.webp',
    '/assets/ArgCards/OrangeCC1.webp',
    '/assets/ArgCards/OrangeCC20.webp',
    '/assets/ArgCards/OrangeCC21.webp',
    '/assets/ArgCards/OrangeCC22.webp',
    '/assets/ArgCards/OrangeCC23.webp',
    '/assets/ArgCards/OrangeCC24.webp',
    '/assets/ArgCards/OrangeCC25.webp',
    '/assets/ArgCards/OrangeCC2.webp',
    '/assets/ArgCards/OrangeCC3.webp',
    '/assets/ArgCards/OrangeCC4.webp',
    '/assets/ArgCards/OrangeCC5.webp',
    '/assets/ArgCards/OrangeCC6.webp',
    '/assets/ArgCards/OrangeCC7.webp',
    '/assets/ArgCards/OrangeCC8.webp',
    '/assets/ArgCards/OrangeCC9.webp'
  ]

  const redList = [
    '/assets/ArgCards/RedCC10.webp',
    '/assets/ArgCards/RedCC11.webp',
    '/assets/ArgCards/RedCC12.webp',
    '/assets/ArgCards/RedCC13.webp',
    '/assets/ArgCards/RedCC14.webp',
    '/assets/ArgCards/RedCC15.webp',
    '/assets/ArgCards/RedCC1.webp',
    '/assets/ArgCards/RedCC2.webp',
    '/assets/ArgCards/RedCC3.webp',
    '/assets/ArgCards/RedCC4.webp',
    '/assets/ArgCards/RedCC5.webp',
    '/assets/ArgCards/RedCC6.webp',
    '/assets/ArgCards/RedCC7.webp',
    '/assets/ArgCards/RedCC8.webp',
    '/assets/ArgCards/RedCC9.webp'
  ]

  const yellowList = [
    '/assets/ArgCards/YellowCC30.webp',
    '/assets/ArgCards/YellowCC9-25.webp',
    '/assets/ArgCards/YellowCC9-57.webp',
    '/assets/ArgCards/YellowCC31.webp',
    '/assets/ArgCards/YellowCC9-27.webp',
    '/assets/ArgCards/YellowCC9-58.webp',
    '/assets/ArgCards/YellowCC32.webp',
    '/assets/ArgCards/YellowCC9-28.webp',
    '/assets/ArgCards/YellowCC9-59.webp',
    '/assets/ArgCards/YellowCC33.webp',
    '/assets/ArgCards/YellowCC9-29.webp',
    '/assets/ArgCards/YellowCC9-5.webp',
    '/assets/ArgCards/YellowCC34.webp',
    '/assets/ArgCards/YellowCC9-2.webp',
    '/assets/ArgCards/YellowCC9-60.webp',
    '/assets/ArgCards/YellowCC35.webp',
    '/assets/ArgCards/YellowCC9-30.webp',
    '/assets/ArgCards/YellowCC9-61.webp',
    '/assets/ArgCards/YellowCC36.webp',
    '/assets/ArgCards/YellowCC9-31.webp',
    '/assets/ArgCards/YellowCC9-62.webp',
    '/assets/ArgCards/YellowCC37.webp',
    '/assets/ArgCards/YellowCC9-32.webp',
    '/assets/ArgCards/YellowCC9-63.webp',
    '/assets/ArgCards/YellowCC38.webp',
    '/assets/ArgCards/YellowCC9-33.webp',
    '/assets/ArgCards/YellowCC9-64.webp',
    '/assets/ArgCards/YellowCC39.webp',
    '/assets/ArgCards/YellowCC9-34.webp',
    '/assets/ArgCards/YellowCC9-65.webp',
    '/assets/ArgCards/YellowACCover.webp',
    '/assets/ArgCards/YellowCC3.webp',
    '/assets/ArgCards/YellowCC9-35.webp',
    '/assets/ArgCards/YellowCC9-66.webp',
    '/assets/ArgCards/YellowCC10.webp',
    '/assets/ArgCards/YellowCC40.webp',
    '/assets/ArgCards/YellowCC9-36.webp',
    '/assets/ArgCards/YellowCC9-67.webp',
    '/assets/ArgCards/YellowCC11.webp',
    '/assets/ArgCards/YellowCC4.webp',
    '/assets/ArgCards/YellowCC9-37.webp',
    '/assets/ArgCards/YellowCC9-68.webp',
    '/assets/ArgCards/YellowCC12.webp',
    '/assets/ArgCards/YellowCC5.webp',
    '/assets/ArgCards/YellowCC9-38.webp',
    '/assets/ArgCards/YellowCC9-69.webp',
    '/assets/ArgCards/YellowCC13.webp',
    '/assets/ArgCards/YellowCC6.webp',
    '/assets/ArgCards/YellowCC9-39.webp',
    '/assets/ArgCards/YellowCC9-6.webp',
    '/assets/ArgCards/YellowCC14.webp',
    '/assets/ArgCards/YellowCC7.webp',
    '/assets/ArgCards/YellowCC9-3.webp',
    '/assets/ArgCards/YellowCC9-70.webp',
    '/assets/ArgCards/YellowCC15.webp',
    '/assets/ArgCards/YellowCC8.webp',
    '/assets/ArgCards/YellowCC9-40.webp',
    '/assets/ArgCards/YellowCC9-71.webp',
    '/assets/ArgCards/YellowCC16.webp',
    '/assets/ArgCards/YellowCC9-10.webp',
    '/assets/ArgCards/YellowCC9-41.webp',
    '/assets/ArgCards/YellowCC9-72.webp',
    '/assets/ArgCards/YellowCC17.webp',
    '/assets/ArgCards/YellowCC9-11.webp',
    '/assets/ArgCards/YellowCC9-43.webp',
    '/assets/ArgCards/YellowCC9-73.webp',
    '/assets/ArgCards/YellowCC18.webp',
    '/assets/ArgCards/YellowCC9-12.webp',
    '/assets/ArgCards/YellowCC9-44.webp',
    '/assets/ArgCards/YellowCC9-74.webp',
    '/assets/ArgCards/YellowCC19.webp',
    '/assets/ArgCards/YellowCC9-13.webp',
    '/assets/ArgCards/YellowCC9-45.webp',
    '/assets/ArgCards/YellowCC9-75.webp',
    '/assets/ArgCards/YellowCC1.webp',
    '/assets/ArgCards/YellowCC9-14.webp',
    '/assets/ArgCards/YellowCC9-46.webp',
    '/assets/ArgCards/YellowCC9-76.webp',
    '/assets/ArgCards/YellowCC20.webp',
    '/assets/ArgCards/YellowCC9-15.webp',
    '/assets/ArgCards/YellowCC9-47.webp',
    '/assets/ArgCards/YellowCC9-77.webp',
    '/assets/ArgCards/YellowCC21.webp',
    '/assets/ArgCards/YellowCC9-16.webp',
    '/assets/ArgCards/YellowCC9-48.webp',
    '/assets/ArgCards/YellowCC9-78.webp',
    '/assets/ArgCards/YellowCC22.webp',
    '/assets/ArgCards/YellowCC9-17.webp',
    '/assets/ArgCards/YellowCC9-49.webp',
    '/assets/ArgCards/YellowCC9-79.webp',
    '/assets/ArgCards/YellowCC23.webp',
    '/assets/ArgCards/YellowCC9-18.webp',
    '/assets/ArgCards/YellowCC9-4.webp',
    '/assets/ArgCards/YellowCC9-7.webp',
    '/assets/ArgCards/YellowCC24.webp',
    '/assets/ArgCards/YellowCC9-19.webp',
    '/assets/ArgCards/YellowCC9-50.webp',
    '/assets/ArgCards/YellowCC9-80.webp',
    '/assets/ArgCards/YellowCC25.webp',
    '/assets/ArgCards/YellowCC9-1.webp',
    '/assets/ArgCards/YellowCC9-51.webp',
    '/assets/ArgCards/YellowCC9-81.webp',
    '/assets/ArgCards/YellowCC26.webp',
    '/assets/ArgCards/YellowCC9-20.webp',
    '/assets/ArgCards/YellowCC9-52.webp',
    '/assets/ArgCards/YellowCC9-8.webp',
    '/assets/ArgCards/YellowCC27.webp',
    '/assets/ArgCards/YellowCC9-21.webp',
    '/assets/ArgCards/YellowCC9-53.webp',
    '/assets/ArgCards/YellowCC9-9.webp',
    '/assets/ArgCards/YellowCC28.webp',
    '/assets/ArgCards/YellowCC9-22.webp',
    '/assets/ArgCards/YellowCC9-54.webp',
    '/assets/ArgCards/YellowCC9.webp',
    '/assets/ArgCards/YellowCC29.webp',
    '/assets/ArgCards/YellowCC9-23.webp',
    '/assets/ArgCards/YellowCC9-55.webp',
    '/assets/ArgCards/YellowCC2.webp',
    '/assets/ArgCards/YellowCC9-24.webp',
    '/assets/ArgCards/YellowCC9-56.webp'
  ]

  function argCardRed() {
    showAlertarg = false
    cardSound.play()
    displayCard = redList[Math.floor(Math.random() * redList.length)]
    showAlertspec = true

  }

  function argCardOrange() {
    showAlertarg = false
    cardSound.play()
    displayCard = orangeList[Math.floor(Math.random() * orangeList.length)]
    showAlertspec = true

  }

  function argCardYellow() {
    showAlertarg = false
    cardSound.play()
    displayCard = yellowList[Math.floor(Math.random() * yellowList.length)]
    showAlertspec = true

  }

  function closeAlert() {
    showAlertspec = false
    showAlertarg = false
    closeSound.play()
  }
</script>

<div class="card">
  <!-- <div class="image-container"> -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <img src={argCards} alt={argCardAlt} on:click={argCard} class="ops-card-cover" />
  <!-- </div> -->
  <!-- <div class="image-container"> -->
  <!-- <img ={argCards} alt={argCardAlt} class="ops-card-cover"/> -->
  <!-- </div> -->
</div>

{#if showAlertarg}
  <div class="custom-alert-full">
    <div class="alert-content">
      <p>Please click on the card color that matches the square you landed on.</p>
      <p></p>
      <wbr />
      <div class="image-row">
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img src={argCards} alt={argCardAlt} on:click={argCardRed} class="imgalert" />
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img src={argCardsor} alt={argCardAlt} on:click={argCardOrange} class="imgalert" />
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img src={argCardsye} alt={argCardAlt} on:click={argCardYellow} class="imgalert" />
      </div>
      <div class="alert-buttons">
        <button on:click={closeAlert}>Cancel</button>
      </div>
    </div>
  </div>
{/if}

{#if showAlertspec}
  <div class="custom-alert">
    <div class="alert-content">
      <p>Please do as the card says, click "Finished" once done.</p>
      <!-- <p>{displayCard}</p> -->
      <wbr />
      <div class="image-row">
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img src={displayCard} alt={argCardAlt} class="imgalertCard"/>
      </div>
      <div class="alert-buttons">
        <button on:click={closeAlert}>Finished</button>
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
    bottom: 31%;
    padding-bottom: 10px;
    padding-left: 15px;
    /* left: 10px; */
  }

  img {
    width: auto;
    height: 12vh;
    aspect-ratio: 2 / 3;
  }

  .imgalert {
    width: auto;
    height: 22vh;
    aspect-ratio: 2 / 3;
  }

  .imgalertCard {
    width: auto;
    height: 60vh;
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
    z-index: 900; /* Ensure it's on top */
  }

  .custom-alert-full {
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
    padding-top: 20px;
  }

  .alert-buttons button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #444;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.2s;
  }

  .alert-buttons button:hover {
    background-color: #555;
  }

  .image-row {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
</style>
