<script>

    // import { onMount } from 'svelte'
    
    // let opCards = 'src/assets/OpCards/CoverUpright.webp'
    // let opCardAlt = 'Op cards'
    let argCards = 'src/assets/ArgCards/RedACCover.webp'
    let argCardAlt = 'Arg cards'
  
    // opCard = () => {
    //     console.log('arg card clicked')
    // }    
  
    // Load the sound effect on mount
    // onMount(() => {
    //   cardSound = new Audio('src/assets/dice-roll-sound.mp3')
    // })
  </script>
  
  <div class="card">
        <!-- <div class="image-container"> -->
            <img src={argCards} alt={argCardAlt} class="ops-card-cover"/>
          <!-- </div> -->
          <!-- <div class="image-container"> -->
            <!-- <img src={argCards} alt={argCardAlt} class="ops-card-cover"/> -->
          <!-- </div> -->
  </div>
  
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

img{
    width: auto;
    height: 12vh;
    aspect-ratio: 2 / 3;
  }

  </style>
  