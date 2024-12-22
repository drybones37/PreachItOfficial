<script>
  import { onMount } from 'svelte'
  import { piecesSelectedList } from './piecesStore';

  let addBoardSound
  let bagSound
  let closeSound
  let bagImgs = './src/assets/BagOfCharac.webp'
  let bagImgAlt = 'Bag of characters'
  let showAlert = false
  let selectionRow = [
    [
      './src/assets/Charac/AfricanBlue.webp',
      './src/assets/Charac/BruneteGreen.webp',
      './src/assets/Charac/ManSuitGreen.webp',
      './src/assets/Charac/AfricanWomanRed.webp',
      './src/assets/Charac/Brunette.webp',
      './src/assets/Charac/MonacleMan.webp',
      './src/assets/Charac/AfricanYellow.webp'
    ],

    [
      './src/assets/Charac/AfricanYellow.webp',
      './src/assets/Charac/BrunetteWomanRed.webp',
      './src/assets/Charac/MonocleBlack.webp',
      './src/assets/Charac/AsianGirlYellow.webp',
      './src/assets/Charac/Casandra.webp',
      './src/assets/Charac/MonocleYellow.webp'
    ],

    [
      './src/assets/Charac/AsianWoman.webp',
      './src/assets/Charac/DirtyBlondeGreen.webp',
      './src/assets/Charac/PinoyBlue.webp',
      './src/assets/Charac/BlondeManGreen.webp',
      './src/assets/Charac/EbonyBlue.webp',
      './src/assets/Charac/PinoyMan.webp'
    ],

    [
      './src/assets/Charac/BlondeWomanRed.webp',
      './src/assets/Charac/EbonyWoman.webp',
      './src/assets/Charac/PinoyYellow.webp',
      './src/assets/Charac/BlondieBlue.webp',
      './src/assets/Charac/ManRed.webp',
      './src/assets/Charac/Rocker.webp'
    ]
  ]

  // let piecesList = [
  //   'src/assets/Charac/AfricanBlue.webp',
  //   'src/assets/Charac/BruneteGreen.webp',
  //   'src/assets/Charac/ManSuitGreen.webp',
  //   'src/assets/Charac/AfricanWomanRed.webp',
  //   'src/assets/Charac/Brunette.webp',
  //   'src/assets/Charac/MonacleMan.webp',

  //   'src/assets/Charac/AfricanYellow.webp',
  //   'src/assets/Charac/BrunetteWomanRed.webp',
  //   'src/assets/Charac/MonocleBlack.webp',
  //   'src/assets/Charac/AsianGirlYellow.webp',
  //   'src/assets/Charac/Casandra.webp',
  //   'src/assets/Charac/MonocleYellow.webp',

  //   'src/assets/Charac/AsianWoman.webp',
  //   'src/assets/Charac/DirtyBlondeGreen.webp',
  //   'src/assets/Charac/PinoyBlue.webp',
  //   'src/assets/Charac/BlondeManGreen.webp',
  //   'src/assets/Charac/EbonyBlue.webp',
  //   'src/assets/Charac/PinoyMan.webp',

  //   'src/assets/Charac/BlondeWomanRed.webp',
  //   'src/assets/Charac/EbonyWoman.webp',
  //   'src/assets/Charac/PinoyYellow.webp',
  //   'src/assets/Charac/BlondieBlue.webp',
  //   'src/assets/Charac/ManRed.webp',
  //   'src/assets/Charac/Rocker.webp'
  // ]

    function addToBoard(src) {
    addBoardSound.play()
    piecesSelectedList.update((list) => [...list, src]);
  }

  function closeBag() {
    showAlert = false
    closeSound.play()
  }

  function openBag() {
    // Play sound
    showAlert = true
    bagSound.play()
  }
  // Load the sound effect on mount
  onMount(() => {
    addBoardSound = new Audio('./src/assets/SFX/piecePop.mp3')
    bagSound = new Audio('./src/assets/SFX/charac-bag.mp3')
    closeSound = new Audio('./src/assets/SFX/cancel.mp3')
  })
</script>

{#if showAlert}
  <div class="custom-alert">
    <div class="alert-content">
      <p>Please click the piece you want to add to the board:</p>
      <wbr />
      <div class="pad">
        {#each selectionRow as Row}
          <div class="player-card">
            <div class="card-content">
              <div class="image-row">
                <div class="image-container">
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                  <img
                    src={Row[0]}
                    alt="Character card"
                    class="xp-icon"
                    on:click={() => addToBoard(Row[0])}
                  />
                </div>
                <div class="image-container">
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                  <img
                    src={Row[1]}
                    alt="Character card"
                    class="xp-icon"
                    on:click={() => addToBoard(Row[1])}
                  />
                </div>
                <div class="image-container">
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                  <img
                    src={Row[2]}
                    alt="Character card"
                    class="xp-icon"
                    on:click={() => addToBoard(Row[2])}
                  />
                </div>
                <div class="image-container">
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                  <img
                    src={Row[3]}
                    alt="Character card"
                    class="xp-icon"
                    on:click={() => addToBoard(Row[3])}
                  />
                </div>
                <div class="image-container">
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                  <img
                    src={Row[4]}
                    alt="Character card"
                    class="xp-icon"
                    on:click={() => addToBoard(Row[4])}
                  />
                </div>

                <div class="image-container">
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                  <img
                    src={Row[5]}
                    alt="Character card"
                    class="xp-icon"
                    on:click={() => addToBoard(Row[5])}
                  />
                </div>
              </div>
            </div>
          </div>
        {/each}
        <div class="alert-buttons">
          <button on:click={closeBag}>Finished</button>
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card" on:click={openBag}>
  <!-- <div class="image-container"> -->
  <img src={bagImgs} alt={bagImgAlt} />
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

  .player-card {
    padding-top: 6px;

    border-radius: 10px;
    margin-bottom: 10px;
  }

  .card-content {
    padding: 5px;
  }

  .image-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .image-container {
    position: relative;
    margin-right: 10px;
  }

  .xp-icon {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    /* border: 1px solid #ccc; */
  }

  .custom-alert {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .alert-content {
    background-color: rgb(36, 35, 35);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    color: white;
    min-width: 300px;
  }

  .alert-buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
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
</style>
