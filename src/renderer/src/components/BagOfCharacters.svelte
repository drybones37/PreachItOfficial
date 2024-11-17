<script>
  import { onMount } from 'svelte'


  let choosingPieces = true
  let bagSound
  let bagImgs = 'src/assets/BagOfCharac.webp'
  let bagImgAlt = 'Bag of characters'

  function openBag() {
    // Play sound
    bagSound.play()
  }
  // Load the sound effect on mount
  onMount(() => {
    bagSound = new Audio('src/assets/dice-roll-sound.mp3')
  })

  function savePlayer() {
    choosingPieces = false
  }

  function closePopup() {
    choosingPieces = false
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card" on:click={openBag}>
  <!-- <div class="image-container"> -->
  <img src={bagImgs} alt={bagImgAlt} class="ops-card-cover" />
</div>

{#if choosingPieces}
  <div class="popup">
    <div class="popup-content">
      <h3>Click Character to Add to Board</h3>
      <div class="edit-image-row">
      <div class="field">
        <div class="edit-image-container">
          <img src="src/assets/Icons/BIBLEIcon.webp" alt="Bible Icon" class="edit-xp-icon" />
        </div>
        <!-- Push images to draggle images list -->
        <input class="pnumclass" type="number" bind:value={players[selectedPlayerIndex].bibleNum} />
      </div>

      <div class="field">
        <div class="edit-image-container">
          <img src="src/assets/Icons/TRACTIcon.webp" alt="Tract Icon" class="edit-xp-icon" />
        </div>
        <input class="pnumclass" type="number" bind:value={players[selectedPlayerIndex].tractNum} />
      </div>
    </div>

    <div class="edit-image-row">
      <div class="field">
        <div class="edit-image-container">
          <img src="src/assets/Icons/FELLOWSHIPIcon.webp" alt="Fellowship Icon" class="edit-xp-icon" />
        </div>
        <input
          class="pnumclass"
          type="number"
          bind:value={players[selectedPlayerIndex].fellowshipNum}
        />
      </div>

      <div class="field">
        <div class="edit-image-container">
          <img src="src/assets/Icons/XPIcon.webp" alt="XP Icon" class="edit-xp-icon" />
        </div>
        <input class="pnumclass" type="number" bind:value={players[selectedPlayerIndex].xpNum} />
      </div>
    </div>

      <div class="popup-buttons">
        <button on:click={savePlayer}>Save</button>
        <button on:click={closePopup}>Cancel</button>
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
