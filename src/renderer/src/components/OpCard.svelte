<script>

    import { onMount } from 'svelte'
    
    let opCards = '/assets/OpCards/CoverUpright.webp'
    let opCardAlt = 'Op cards'
    let cardSound
    let closeSound
    let showOpcard = false
    let disCard

  let showKeep = false
  

    const opList = [
"/assets/OpCards/CardB10.webp",  "/assets/OpCards/CardB8.webp",    "/assets/OpCards/CardBQ6.webp",  "/assets/OpCards/CardC7.webp",  "/assets/OpCards/CardKN1.webp",  "/assets/OpCards/CardM3.webp",   "/assets/OpCards/CardST1.webp",  "/assets/OpCards/CardT7.webp",
"/assets/OpCards/CardB11.webp",  "/assets/OpCards/CardB9.webp",    "/assets/OpCards/CardBQ7.webp",  "/assets/OpCards/CardC8.webp",  "/assets/OpCards/CardKN2.webp",  "/assets/OpCards/CardM4.webp",   "/assets/OpCards/CardST2.webp",  "/assets/OpCards/CardT8.webp",
"/assets/OpCards/CardB12.webp",  "/assets/OpCards/CardBQ10.webp",  "/assets/OpCards/CardBQ8.webp",  "/assets/OpCards/CardD1.webp",  "/assets/OpCards/CardKN3.webp",  "/assets/OpCards/CardP1.webp",   "/assets/OpCards/CardST3.webp", 
"/assets/OpCards/CardB1.webp",   "/assets/OpCards/CardBQ11.webp",  "/assets/OpCards/CardBQ9.webp",  "/assets/OpCards/CardD2.webp",  "/assets/OpCards/CardKN4.webp",  "/assets/OpCards/CardP2.webp",   "/assets/OpCards/CardST4.webp",
"/assets/OpCards/CardB2.webp",   "/assets/OpCards/CardBQ12.webp",  "/assets/OpCards/CardC1.webp",   "/assets/OpCards/CardD3.webp",  "/assets/OpCards/CardKN5.webp",  "/assets/OpCards/CardP3.webp",   "/assets/OpCards/CardT1.webp",
"/assets/OpCards/CardB3.webp",   "/assets/OpCards/CardBQ1.webp",   "/assets/OpCards/CardC2.webp",   "/assets/OpCards/CardD4.webp",  "/assets/OpCards/CardKN6.webp",  "/assets/OpCards/CardP4.webp",   "/assets/OpCards/CardT2.webp",
"/assets/OpCards/CardB4.webp",   "/assets/OpCards/CardBQ2.webp",   "/assets/OpCards/CardC3.webp",   "/assets/OpCards/CardD5.webp",  "/assets/OpCards/CardKN7.webp",  "/assets/OpCards/CardPR1.webp",  "/assets/OpCards/CardT3.webp",
"/assets/OpCards/CardB5.webp",   "/assets/OpCards/CardBQ3.webp",   "/assets/OpCards/CardC4.webp",   "/assets/OpCards/CardD6.webp",  "/assets/OpCards/CardKN8.webp",  "/assets/OpCards/CardPR2.webp",  "/assets/OpCards/CardT4.webp",
"/assets/OpCards/CardB6.webp",   "/assets/OpCards/CardBQ4.webp",   "/assets/OpCards/CardC5.webp",   "/assets/OpCards/CardD7.webp",  "/assets/OpCards/CardM1.webp",   "/assets/OpCards/CardPR3.webp",  "/assets/OpCards/CardT5.webp",
"/assets/OpCards/CardB7.webp",   "/assets/OpCards/CardBQ5.webp",   "/assets/OpCards/CardC6.webp",   "/assets/OpCards/CardD8.webp",  "/assets/OpCards/CardM2.webp",   "/assets/OpCards/CardPR4.webp",  "/assets/OpCards/CardT6.webp",
    ]

    function opCard(){
        cardSound.play()
        disCard = opList[Math.floor(Math.random() * opList.length)]
        showOpcard = true
    }    

    function closeAlert() {
    showOpcard = false
    closeSound.play()
  }

  function saveCard(){
    cardSound.play()
    showOpcard = false
    showKeep = true
    
  }

  function closeKeep(){
    showKeep = false
    closeSound.play()
  }

    onMount(() => {
    cardSound = new Audio('/assets/SFX/opCard.mp3')
    closeSound = new Audio('/assets/SFX/cancel.mp3')
  })
  
    // Load the sound effect on mount
    // onMount(() => {
    //   cardSound = new Audio('/assets/dice-roll-sound.mp3')
    // })
  </script>
  
  <div class="card">
        <!-- <div class="image-container"> -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img src={opCards} alt={opCardAlt} on:click={opCard} class="ops-card-cover" />
          <!-- </div> -->
          <!-- <div class="image-container"> -->
            <!-- <img src={argCards} alt={argCardAlt} class="ops-card-cover"/> -->
          <!-- </div> -->
  </div>

  {#if showOpcard}
  <div class="custom-alert">
    <div class="alert-content">
      <!-- <p>{displayCard}</p> -->
      <wbr />
      <div class="image-row">
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img src={disCard} alt={opCardAlt} class="imgalertCard"/>
      </div>
      <div class="alert-buttons">
        <button on:click={saveCard}>Keep</button>
        <wbr />
        <button on:click={closeAlert}>Finished</button>
        
      </div>
    </div>
  </div>
{/if}

{#if showKeep}
  <div class="custom-alert-keep">
    <div class="alert-content">
      <p>Read card to see if it says you can keep it.</p>
      <!-- <p>{displayCard}</p> -->
      <wbr />
      <div class="image-row">
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img src={disCard} alt={opCardAlt} class="imgalertCard"/>
      </div>
      <wbr />
      <h4>Instructions to keep card:</h4>
      <h5>Click the opportunity card icon by your name.</h5>
      <h5>Select the card.</h5>
      <h5>Click the "Add" button.</h5>
      <div class="alert-buttons">
        <button on:click={closeKeep}>Okay</button>
        
      </div>
    </div>
  </div>
{/if}

  
  
  <style>
  
    img:active {
      transform: scale(0.95);
    }
  
    .card {
        display: flex;
    justify-content: space-evenly;
    align-items: start;
    border-radius: 10px;
    width: 15%;
    height: 10%;
    position: absolute;
    bottom: 17%;
    padding-bottom: 10px;
    padding-left: 15px;
}

img{
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
    z-index: 900; /* Ensure it's on top */
  }

  .custom-alert-keep {
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

  .imgalertCard {
    width: auto;
    height: 60vh;
    aspect-ratio: 2 / 3;
  }


  </style>
  
