<script>
  import { onMount } from 'svelte'
  // import { yellowList } from './ArgcardData.svelte'
  
  // SFX
  // import blipSound from '../SFX/blip.mp3';
  // import cancelSound from '../SFX/cancel.mp3';

  // Select a random element

  // let opCards = './OpCards/CoverUpright.webp'
  // let opCardAlt = 'Op cards'
  let argCards = './ArgCards/RedACCover.webp'
  let argCardsor = './ArgCards/OrangeACCover.webp'
  let argCardsye = './ArgCards/YellowACCover.webp'
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
    cardSound = new Audio('./SFX/flipcard.mp3')
    closeSound = new Audio('./SFX/cancel.mp3')
  })

  const orangeList = [
    './ArgCards/OrangeCC10.webp',
    './ArgCards/OrangeCC11.webp',
    './ArgCards/OrangeCC12.webp',
    './ArgCards/OrangeCC13.webp',
    './ArgCards/OrangeCC14.webp',
    './ArgCards/OrangeCC15.webp',
    './ArgCards/OrangeCC16.webp',
    './ArgCards/OrangeCC17.webp',
    './ArgCards/OrangeCC18.webp',
    './ArgCards/OrangeCC19.webp',
    './ArgCards/OrangeCC1.webp',
    './ArgCards/OrangeCC20.webp',
    './ArgCards/OrangeCC21.webp',
    './ArgCards/OrangeCC22.webp',
    './ArgCards/OrangeCC23.webp',
    './ArgCards/OrangeCC24.webp',
    './ArgCards/OrangeCC25.webp',
    './ArgCards/OrangeCC2.webp',
    './ArgCards/OrangeCC3.webp',
    './ArgCards/OrangeCC4.webp',
    './ArgCards/OrangeCC5.webp',
    './ArgCards/OrangeCC6.webp',
    './ArgCards/OrangeCC7.webp',
    './ArgCards/OrangeCC8.webp',
    './ArgCards/OrangeCC9.webp'
  ]

  const redList = [
    './ArgCards/RedCC10.webp',
    './ArgCards/RedCC11.webp',
    './ArgCards/RedCC12.webp',
    './ArgCards/RedCC13.webp',
    './ArgCards/RedCC14.webp',
    './ArgCards/RedCC15.webp',
    './ArgCards/RedCC1.webp',
    './ArgCards/RedCC2.webp',
    './ArgCards/RedCC3.webp',
    './ArgCards/RedCC4.webp',
    './ArgCards/RedCC5.webp',
    './ArgCards/RedCC6.webp',
    './ArgCards/RedCC7.webp',
    './ArgCards/RedCC8.webp',
    './ArgCards/RedCC9.webp'
  ]

  const yellowList = [
    './ArgCards/YellowCC30.webp',
    './ArgCards/YellowCC9-25.webp',
    './ArgCards/YellowCC9-57.webp',
    './ArgCards/YellowCC31.webp',
    './ArgCards/YellowCC9-27.webp',
    './ArgCards/YellowCC9-58.webp',
    './ArgCards/YellowCC32.webp',
    './ArgCards/YellowCC9-28.webp',
    './ArgCards/YellowCC9-59.webp',
    './ArgCards/YellowCC33.webp',
    './ArgCards/YellowCC9-29.webp',
    './ArgCards/YellowCC9-5.webp',
    './ArgCards/YellowCC34.webp',
    './ArgCards/YellowCC9-2.webp',
    './ArgCards/YellowCC9-60.webp',
    './ArgCards/YellowCC35.webp',
    './ArgCards/YellowCC9-30.webp',
    './ArgCards/YellowCC9-61.webp',
    './ArgCards/YellowCC36.webp',
    './ArgCards/YellowCC9-31.webp',
    './ArgCards/YellowCC9-62.webp',
    './ArgCards/YellowCC37.webp',
    './ArgCards/YellowCC9-32.webp',
    './ArgCards/YellowCC9-63.webp',
    './ArgCards/YellowCC38.webp',
    './ArgCards/YellowCC9-33.webp',
    './ArgCards/YellowCC9-64.webp',
    './ArgCards/YellowCC39.webp',
    './ArgCards/YellowCC9-34.webp',
    './ArgCards/YellowCC9-65.webp',
    './ArgCards/YellowACCover.webp',
    './ArgCards/YellowCC3.webp',
    './ArgCards/YellowCC9-35.webp',
    './ArgCards/YellowCC9-66.webp',
    './ArgCards/YellowCC10.webp',
    './ArgCards/YellowCC40.webp',
    './ArgCards/YellowCC9-36.webp',
    './ArgCards/YellowCC9-67.webp',
    './ArgCards/YellowCC11.webp',
    './ArgCards/YellowCC4.webp',
    './ArgCards/YellowCC9-37.webp',
    './ArgCards/YellowCC9-68.webp',
    './ArgCards/YellowCC12.webp',
    './ArgCards/YellowCC5.webp',
    './ArgCards/YellowCC9-38.webp',
    './ArgCards/YellowCC9-69.webp',
    './ArgCards/YellowCC13.webp',
    './ArgCards/YellowCC6.webp',
    './ArgCards/YellowCC9-39.webp',
    './ArgCards/YellowCC9-6.webp',
    './ArgCards/YellowCC14.webp',
    './ArgCards/YellowCC7.webp',
    './ArgCards/YellowCC9-3.webp',
    './ArgCards/YellowCC9-70.webp',
    './ArgCards/YellowCC15.webp',
    './ArgCards/YellowCC8.webp',
    './ArgCards/YellowCC9-40.webp',
    './ArgCards/YellowCC9-71.webp',
    './ArgCards/YellowCC16.webp',
    './ArgCards/YellowCC9-10.webp',
    './ArgCards/YellowCC9-41.webp',
    './ArgCards/YellowCC9-72.webp',
    './ArgCards/YellowCC17.webp',
    './ArgCards/YellowCC9-11.webp',
    './ArgCards/YellowCC9-43.webp',
    './ArgCards/YellowCC9-73.webp',
    './ArgCards/YellowCC18.webp',
    './ArgCards/YellowCC9-12.webp',
    './ArgCards/YellowCC9-44.webp',
    './ArgCards/YellowCC9-74.webp',
    './ArgCards/YellowCC19.webp',
    './ArgCards/YellowCC9-13.webp',
    './ArgCards/YellowCC9-45.webp',
    './ArgCards/YellowCC9-75.webp',
    './ArgCards/YellowCC1.webp',
    './ArgCards/YellowCC9-14.webp',
    './ArgCards/YellowCC9-46.webp',
    './ArgCards/YellowCC9-76.webp',
    './ArgCards/YellowCC20.webp',
    './ArgCards/YellowCC9-15.webp',
    './ArgCards/YellowCC9-47.webp',
    './ArgCards/YellowCC9-77.webp',
    './ArgCards/YellowCC21.webp',
    './ArgCards/YellowCC9-16.webp',
    './ArgCards/YellowCC9-48.webp',
    './ArgCards/YellowCC9-78.webp',
    './ArgCards/YellowCC22.webp',
    './ArgCards/YellowCC9-17.webp',
    './ArgCards/YellowCC9-49.webp',
    './ArgCards/YellowCC9-79.webp',
    './ArgCards/YellowCC23.webp',
    './ArgCards/YellowCC9-18.webp',
    './ArgCards/YellowCC9-4.webp',
    './ArgCards/YellowCC9-7.webp',
    './ArgCards/YellowCC24.webp',
    './ArgCards/YellowCC9-19.webp',
    './ArgCards/YellowCC9-50.webp',
    './ArgCards/YellowCC9-80.webp',
    './ArgCards/YellowCC25.webp',
    './ArgCards/YellowCC9-1.webp',
    './ArgCards/YellowCC9-51.webp',
    './ArgCards/YellowCC9-81.webp',
    './ArgCards/YellowCC26.webp',
    './ArgCards/YellowCC9-20.webp',
    './ArgCards/YellowCC9-52.webp',
    './ArgCards/YellowCC9-8.webp',
    './ArgCards/YellowCC27.webp',
    './ArgCards/YellowCC9-21.webp',
    './ArgCards/YellowCC9-53.webp',
    './ArgCards/YellowCC9-9.webp',
    './ArgCards/YellowCC28.webp',
    './ArgCards/YellowCC9-22.webp',
    './ArgCards/YellowCC9-54.webp',
    './ArgCards/YellowCC9.webp',
    './ArgCards/YellowCC29.webp',
    './ArgCards/YellowCC9-23.webp',
    './ArgCards/YellowCC9-55.webp',
    './ArgCards/YellowCC2.webp',
    './ArgCards/YellowCC9-24.webp',
    './ArgCards/YellowCC9-56.webp'
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
