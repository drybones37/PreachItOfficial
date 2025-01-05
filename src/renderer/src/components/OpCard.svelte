<script>

    import { onMount } from 'svelte'
    
    let opCards = './OpCards/CoverUpright.webp'
    let opCardAlt = 'Op cards'
    let cardSound
    let closeSound
    let showOpcard = false
    let disCard

  let showKeep = false
  

    const opList = [
"./OpCards/CardB10.webp",  "./OpCards/CardB8.webp",    "./OpCards/CardBQ6.webp",  "./OpCards/CardC7.webp",  "./OpCards/CardKN1.webp",  "./OpCards/CardM3.webp",   "./OpCards/CardST1.webp",  "./OpCards/CardT7.webp",
"./OpCards/CardB11.webp",  "./OpCards/CardB9.webp",    "./OpCards/CardBQ7.webp",  "./OpCards/CardC8.webp",  "./OpCards/CardKN2.webp",  "./OpCards/CardM4.webp",   "./OpCards/CardST2.webp",  "./OpCards/CardT8.webp",
"./OpCards/CardB12.webp",  "./OpCards/CardBQ10.webp",  "./OpCards/CardBQ8.webp",  "./OpCards/CardD1.webp",  "./OpCards/CardKN3.webp",  "./OpCards/CardP1.webp",   "./OpCards/CardST3.webp", 
"./OpCards/CardB1.webp",   "./OpCards/CardBQ11.webp",  "./OpCards/CardBQ9.webp",  "./OpCards/CardD2.webp",  "./OpCards/CardKN4.webp",  "./OpCards/CardP2.webp",   "./OpCards/CardST4.webp",
"./OpCards/CardB2.webp",   "./OpCards/CardBQ12.webp",  "./OpCards/CardC1.webp",   "./OpCards/CardD3.webp",  "./OpCards/CardKN5.webp",  "./OpCards/CardP3.webp",   "./OpCards/CardT1.webp",
"./OpCards/CardB3.webp",   "./OpCards/CardBQ1.webp",   "./OpCards/CardC2.webp",   "./OpCards/CardD4.webp",  "./OpCards/CardKN6.webp",  "./OpCards/CardP4.webp",   "./OpCards/CardT2.webp",
"./OpCards/CardB4.webp",   "./OpCards/CardBQ2.webp",   "./OpCards/CardC3.webp",   "./OpCards/CardD5.webp",  "./OpCards/CardKN7.webp",  "./OpCards/CardPR1.webp",  "./OpCards/CardT3.webp",
"./OpCards/CardB5.webp",   "./OpCards/CardBQ3.webp",   "./OpCards/CardC4.webp",   "./OpCards/CardD6.webp",  "./OpCards/CardKN8.webp",  "./OpCards/CardPR2.webp",  "./OpCards/CardT4.webp",
"./OpCards/CardB6.webp",   "./OpCards/CardBQ4.webp",   "./OpCards/CardC5.webp",   "./OpCards/CardD7.webp",  "./OpCards/CardM1.webp",   "./OpCards/CardPR3.webp",  "./OpCards/CardT5.webp",
"./OpCards/CardB7.webp",   "./OpCards/CardBQ5.webp",   "./OpCards/CardC6.webp",   "./OpCards/CardD8.webp",  "./OpCards/CardM2.webp",   "./OpCards/CardPR4.webp",  "./OpCards/CardT6.webp",
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
    cardSound = new Audio('./SFX/opCard.mp3')
    closeSound = new Audio('./SFX/cancel.mp3')
  })
  
    // Load the sound effect on mount
    // onMount(() => {
    //   cardSound = new Audio('./dice-roll-sound.mp3')
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
  
