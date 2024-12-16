<script>
  import { onMount } from 'svelte'
  // import { yellowList } from './ArgcardData.svelte'

  // Select a random element

  // let opCards = 'src/assets/OpCards/CoverUpright.webp'
  // let opCardAlt = 'Op cards'
  let argCards = 'src/assets/ArgCards/RedACCover.webp'
  let argCardsor = 'src/assets/ArgCards/OrangeACCover.webp'
  let argCardsye = 'src/assets/ArgCards/YellowACCover.webp'
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
    cardSound = new Audio('src/assets/SFX/flipcard.mp3')
    closeSound = new Audio('src/assets/SFX/cancel.mp3')
  })

  const orangeList = [
    'src/assets/ArgCards/OrangeCC10.webp',
    'src/assets/ArgCards/OrangeCC11.webp',
    'src/assets/ArgCards/OrangeCC12.webp',
    'src/assets/ArgCards/OrangeCC13.webp',
    'src/assets/ArgCards/OrangeCC14.webp',
    'src/assets/ArgCards/OrangeCC15.webp',
    'src/assets/ArgCards/OrangeCC16.webp',
    'src/assets/ArgCards/OrangeCC17.webp',
    'src/assets/ArgCards/OrangeCC18.webp',
    'src/assets/ArgCards/OrangeCC19.webp',
    'src/assets/ArgCards/OrangeCC1.webp',
    'src/assets/ArgCards/OrangeCC20.webp',
    'src/assets/ArgCards/OrangeCC21.webp',
    'src/assets/ArgCards/OrangeCC22.webp',
    'src/assets/ArgCards/OrangeCC23.webp',
    'src/assets/ArgCards/OrangeCC24.webp',
    'src/assets/ArgCards/OrangeCC25.webp',
    'src/assets/ArgCards/OrangeCC2.webp',
    'src/assets/ArgCards/OrangeCC3.webp',
    'src/assets/ArgCards/OrangeCC4.webp',
    'src/assets/ArgCards/OrangeCC5.webp',
    'src/assets/ArgCards/OrangeCC6.webp',
    'src/assets/ArgCards/OrangeCC7.webp',
    'src/assets/ArgCards/OrangeCC8.webp',
    'src/assets/ArgCards/OrangeCC9.webp'
  ]

  const redList = [
    'src/assets/ArgCards/RedCC10.webp',
    'src/assets/ArgCards/RedCC11.webp',
    'src/assets/ArgCards/RedCC12.webp',
    'src/assets/ArgCards/RedCC13.webp',
    'src/assets/ArgCards/RedCC14.webp',
    'src/assets/ArgCards/RedCC15.webp',
    'src/assets/ArgCards/RedCC1.webp',
    'src/assets/ArgCards/RedCC2.webp',
    'src/assets/ArgCards/RedCC3.webp',
    'src/assets/ArgCards/RedCC4.webp',
    'src/assets/ArgCards/RedCC5.webp',
    'src/assets/ArgCards/RedCC6.webp',
    'src/assets/ArgCards/RedCC7.webp',
    'src/assets/ArgCards/RedCC8.webp',
    'src/assets/ArgCards/RedCC9.webp'
  ]

  const yellowList = [
    'src/assets/ArgCards/YellowCC30.webp',
    'src/assets/ArgCards/YellowCC9-25.webp',
    'src/assets/ArgCards/YellowCC9-57.webp',
    'src/assets/ArgCards/YellowCC31.webp',
    'src/assets/ArgCards/YellowCC9-27.webp',
    'src/assets/ArgCards/YellowCC9-58.webp',
    'src/assets/ArgCards/YellowCC32.webp',
    'src/assets/ArgCards/YellowCC9-28.webp',
    'src/assets/ArgCards/YellowCC9-59.webp',
    'src/assets/ArgCards/YellowCC33.webp',
    'src/assets/ArgCards/YellowCC9-29.webp',
    'src/assets/ArgCards/YellowCC9-5.webp',
    'src/assets/ArgCards/YellowCC34.webp',
    'src/assets/ArgCards/YellowCC9-2.webp',
    'src/assets/ArgCards/YellowCC9-60.webp',
    'src/assets/ArgCards/YellowCC35.webp',
    'src/assets/ArgCards/YellowCC9-30.webp',
    'src/assets/ArgCards/YellowCC9-61.webp',
    'src/assets/ArgCards/YellowCC36.webp',
    'src/assets/ArgCards/YellowCC9-31.webp',
    'src/assets/ArgCards/YellowCC9-62.webp',
    'src/assets/ArgCards/YellowCC37.webp',
    'src/assets/ArgCards/YellowCC9-32.webp',
    'src/assets/ArgCards/YellowCC9-63.webp',
    'src/assets/ArgCards/YellowCC38.webp',
    'src/assets/ArgCards/YellowCC9-33.webp',
    'src/assets/ArgCards/YellowCC9-64.webp',
    'src/assets/ArgCards/YellowCC39.webp',
    'src/assets/ArgCards/YellowCC9-34.webp',
    'src/assets/ArgCards/YellowCC9-65.webp',
    'src/assets/ArgCards/YellowACCover.webp',
    'src/assets/ArgCards/YellowCC3.webp',
    'src/assets/ArgCards/YellowCC9-35.webp',
    'src/assets/ArgCards/YellowCC9-66.webp',
    'src/assets/ArgCards/YellowCC10.webp',
    'src/assets/ArgCards/YellowCC40.webp',
    'src/assets/ArgCards/YellowCC9-36.webp',
    'src/assets/ArgCards/YellowCC9-67.webp',
    'src/assets/ArgCards/YellowCC11.webp',
    'src/assets/ArgCards/YellowCC4.webp',
    'src/assets/ArgCards/YellowCC9-37.webp',
    'src/assets/ArgCards/YellowCC9-68.webp',
    'src/assets/ArgCards/YellowCC12.webp',
    'src/assets/ArgCards/YellowCC5.webp',
    'src/assets/ArgCards/YellowCC9-38.webp',
    'src/assets/ArgCards/YellowCC9-69.webp',
    'src/assets/ArgCards/YellowCC13.webp',
    'src/assets/ArgCards/YellowCC6.webp',
    'src/assets/ArgCards/YellowCC9-39.webp',
    'src/assets/ArgCards/YellowCC9-6.webp',
    'src/assets/ArgCards/YellowCC14.webp',
    'src/assets/ArgCards/YellowCC7.webp',
    'src/assets/ArgCards/YellowCC9-3.webp',
    'src/assets/ArgCards/YellowCC9-70.webp',
    'src/assets/ArgCards/YellowCC15.webp',
    'src/assets/ArgCards/YellowCC8.webp',
    'src/assets/ArgCards/YellowCC9-40.webp',
    'src/assets/ArgCards/YellowCC9-71.webp',
    'src/assets/ArgCards/YellowCC16.webp',
    'src/assets/ArgCards/YellowCC9-10.webp',
    'src/assets/ArgCards/YellowCC9-41.webp',
    'src/assets/ArgCards/YellowCC9-72.webp',
    'src/assets/ArgCards/YellowCC17.webp',
    'src/assets/ArgCards/YellowCC9-11.webp',
    'src/assets/ArgCards/YellowCC9-43.webp',
    'src/assets/ArgCards/YellowCC9-73.webp',
    'src/assets/ArgCards/YellowCC18.webp',
    'src/assets/ArgCards/YellowCC9-12.webp',
    'src/assets/ArgCards/YellowCC9-44.webp',
    'src/assets/ArgCards/YellowCC9-74.webp',
    'src/assets/ArgCards/YellowCC19.webp',
    'src/assets/ArgCards/YellowCC9-13.webp',
    'src/assets/ArgCards/YellowCC9-45.webp',
    'src/assets/ArgCards/YellowCC9-75.webp',
    'src/assets/ArgCards/YellowCC1.webp',
    'src/assets/ArgCards/YellowCC9-14.webp',
    'src/assets/ArgCards/YellowCC9-46.webp',
    'src/assets/ArgCards/YellowCC9-76.webp',
    'src/assets/ArgCards/YellowCC20.webp',
    'src/assets/ArgCards/YellowCC9-15.webp',
    'src/assets/ArgCards/YellowCC9-47.webp',
    'src/assets/ArgCards/YellowCC9-77.webp',
    'src/assets/ArgCards/YellowCC21.webp',
    'src/assets/ArgCards/YellowCC9-16.webp',
    'src/assets/ArgCards/YellowCC9-48.webp',
    'src/assets/ArgCards/YellowCC9-78.webp',
    'src/assets/ArgCards/YellowCC22.webp',
    'src/assets/ArgCards/YellowCC9-17.webp',
    'src/assets/ArgCards/YellowCC9-49.webp',
    'src/assets/ArgCards/YellowCC9-79.webp',
    'src/assets/ArgCards/YellowCC23.webp',
    'src/assets/ArgCards/YellowCC9-18.webp',
    'src/assets/ArgCards/YellowCC9-4.webp',
    'src/assets/ArgCards/YellowCC9-7.webp',
    'src/assets/ArgCards/YellowCC24.webp',
    'src/assets/ArgCards/YellowCC9-19.webp',
    'src/assets/ArgCards/YellowCC9-50.webp',
    'src/assets/ArgCards/YellowCC9-80.webp',
    'src/assets/ArgCards/YellowCC25.webp',
    'src/assets/ArgCards/YellowCC9-1.webp',
    'src/assets/ArgCards/YellowCC9-51.webp',
    'src/assets/ArgCards/YellowCC9-81.webp',
    'src/assets/ArgCards/YellowCC26.webp',
    'src/assets/ArgCards/YellowCC9-20.webp',
    'src/assets/ArgCards/YellowCC9-52.webp',
    'src/assets/ArgCards/YellowCC9-8.webp',
    'src/assets/ArgCards/YellowCC27.webp',
    'src/assets/ArgCards/YellowCC9-21.webp',
    'src/assets/ArgCards/YellowCC9-53.webp',
    'src/assets/ArgCards/YellowCC9-9.webp',
    'src/assets/ArgCards/YellowCC28.webp',
    'src/assets/ArgCards/YellowCC9-22.webp',
    'src/assets/ArgCards/YellowCC9-54.webp',
    'src/assets/ArgCards/YellowCC9.webp',
    'src/assets/ArgCards/YellowCC29.webp',
    'src/assets/ArgCards/YellowCC9-23.webp',
    'src/assets/ArgCards/YellowCC9-55.webp',
    'src/assets/ArgCards/YellowCC2.webp',
    'src/assets/ArgCards/YellowCC9-24.webp',
    'src/assets/ArgCards/YellowCC9-56.webp'
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
  <!-- <img src={argCards} alt={argCardAlt} class="ops-card-cover"/> -->
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
