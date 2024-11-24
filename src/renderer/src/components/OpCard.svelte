<script>

    import { onMount } from 'svelte'
    
    let opCards = 'src/assets/OpCards/CoverUpright.webp'
    let opCardAlt = 'Op cards'
    let cardSound

    function opCard(){
        cardSound.play()
    }    

    onMount(() => {
    cardSound = new Audio('src/assets/SFX/flipcard.mp3')
  })
  
    // Load the sound effect on mount
    // onMount(() => {
    //   cardSound = new Audio('src/assets/dice-roll-sound.mp3')
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

  </style>
  