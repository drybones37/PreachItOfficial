<script>

    import { onMount } from 'svelte'
    
    let opCards = './src/assets/OpCards/CoverUpright.webp'
    let opCardAlt = 'Op cards'
    let cardSound
    let closeSound
    let showOpcard = false
    let disCard

  let showKeep = false
  

    const opList = [
"./src/assets/OpCards/CardB10.webp",  "./src/assets/OpCards/CardB8.webp",    "./src/assets/OpCards/CardBQ6.webp",  "./src/assets/OpCards/CardC7.webp",  "./src/assets/OpCards/CardKN1.webp",  "./src/assets/OpCards/CardM3.webp",   "./src/assets/OpCards/CardST1.webp",  "./src/assets/OpCards/CardT7.webp",
"./src/assets/OpCards/CardB11.webp",  "./src/assets/OpCards/CardB9.webp",    "./src/assets/OpCards/CardBQ7.webp",  "./src/assets/OpCards/CardC8.webp",  "./src/assets/OpCards/CardKN2.webp",  "./src/assets/OpCards/CardM4.webp",   "./src/assets/OpCards/CardST2.webp",  "./src/assets/OpCards/CardT8.webp",
"./src/assets/OpCards/CardB12.webp",  "./src/assets/OpCards/CardBQ10.webp",  "./src/assets/OpCards/CardBQ8.webp",  "./src/assets/OpCards/CardD1.webp",  "./src/assets/OpCards/CardKN3.webp",  "./src/assets/OpCards/CardP1.webp",   "./src/assets/OpCards/CardST3.webp", 
"./src/assets/OpCards/CardB1.webp",   "./src/assets/OpCards/CardBQ11.webp",  "./src/assets/OpCards/CardBQ9.webp",  "./src/assets/OpCards/CardD2.webp",  "./src/assets/OpCards/CardKN4.webp",  "./src/assets/OpCards/CardP2.webp",   "./src/assets/OpCards/CardST4.webp",
"./src/assets/OpCards/CardB2.webp",   "./src/assets/OpCards/CardBQ12.webp",  "./src/assets/OpCards/CardC1.webp",   "./src/assets/OpCards/CardD3.webp",  "./src/assets/OpCards/CardKN5.webp",  "./src/assets/OpCards/CardP3.webp",   "./src/assets/OpCards/CardT1.webp",
"./src/assets/OpCards/CardB3.webp",   "./src/assets/OpCards/CardBQ1.webp",   "./src/assets/OpCards/CardC2.webp",   "./src/assets/OpCards/CardD4.webp",  "./src/assets/OpCards/CardKN6.webp",  "./src/assets/OpCards/CardP4.webp",   "./src/assets/OpCards/CardT2.webp",
"./src/assets/OpCards/CardB4.webp",   "./src/assets/OpCards/CardBQ2.webp",   "./src/assets/OpCards/CardC3.webp",   "./src/assets/OpCards/CardD5.webp",  "./src/assets/OpCards/CardKN7.webp",  "./src/assets/OpCards/CardPR1.webp",  "./src/assets/OpCards/CardT3.webp",
"./src/assets/OpCards/CardB5.webp",   "./src/assets/OpCards/CardBQ3.webp",   "./src/assets/OpCards/CardC4.webp",   "./src/assets/OpCards/CardD6.webp",  "./src/assets/OpCards/CardKN8.webp",  "./src/assets/OpCards/CardPR2.webp",  "./src/assets/OpCards/CardT4.webp",
"./src/assets/OpCards/CardB6.webp",   "./src/assets/OpCards/CardBQ4.webp",   "./src/assets/OpCards/CardC5.webp",   "./src/assets/OpCards/CardD7.webp",  "./src/assets/OpCards/CardM1.webp",   "./src/assets/OpCards/CardPR3.webp",  "./src/assets/OpCards/CardT5.webp",
"./src/assets/OpCards/CardB7.webp",   "./src/assets/OpCards/CardBQ5.webp",   "./src/assets/OpCards/CardC6.webp",   "./src/assets/OpCards/CardD8.webp",  "./src/assets/OpCards/CardM2.webp",   "./src/assets/OpCards/CardPR4.webp",  "./src/assets/OpCards/CardT6.webp",
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
    cardSound = new Audio('./src/assets/SFX/opCard.mp3')
    closeSound = new Audio('./src/assets/SFX/cancel.mp3')
  })
  
    // Load the sound effect on mount
    // onMount(() => {
    //   cardSound = new Audio('./src/assets/dice-roll-sound.mp3')
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
  
