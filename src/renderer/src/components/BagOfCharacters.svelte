<script>
  import { onMount } from 'svelte'
  let bagSound
  let bagImgs = 'src/assets/BagOfCharac.webp'
  let bagImgAlt = 'Bag of characters'
  let showAlert = false

  let piecesList = [""]
  let piecesSelectedList = ['src/assets/Charac/AfricanBlue.webp',      'src/assets/Charac/BruneteGreen.webp',      'src/assets/Charac/ManSuitGreen.webp',
'src/assets/Charac/AfricanWomanRed.webp',  'src/assets/Charac/Brunette.webp',          'src/assets/Charac/MonacleMan.webp',
'src/assets/Charac/AfricanYellow.webp',    'src/assets/Charac/BrunetteWomanRed.webp',  'src/assets/Charac/MonocleBlack.webp',
'src/assets/Charac/AsianGirlYellow.webp',  'src/assets/Charac/Casandra.webp',          'src/assets/Charac/MonocleYellow.webp',
'src/assets/Charac/AsianWoman.webp',       'src/assets/Charac/DirtyBlondeGreen.webp',  'src/assets/Charac/PinoyBlue.webp',
'src/assets/Charac/BlondeManGreen.webp',   'src/assets/Charac/EbonyBlue.webp',         'src/assets/Charac/PinoyMan.webp',
'src/assets/Charac/BlondeWomanRed.webp',   'src/assets/Charac/EbonyWoman.webp',        'src/assets/Charac/PinoyYellow.webp',
'src/assets/Charac/BlondieBlue.webp',      'src/assets/Charac/ManRed.webp',            'src/assets/Charac/Rocker.webp',]



  function closeBag(){
    showAlert = false
  }


  function openBag() {
    // Play sound
    bagSound.play()
  }
  // Load the sound effect on mount
  onMount(() => {
    bagSound = new Audio('src/assets/dice-roll-sound.mp3')
  })
</script>

{#if showAlert}
  <div class="custom-alert">
    <div class="alert-content">
      <p>Click the piece you want to add to the board.</p>
      <wbr/>
      <div class="alert-buttons">
        <button on:click={closeBag}>Done</button>
        <button on:click={closeBag}>Cancel</button>
      </div>
    </div>
  </div>
{/if}

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