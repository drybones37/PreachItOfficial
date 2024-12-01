<!-- TODO Add a bike icon for the player who gets a bike card -->
<!-- TODO Add the privillages cards to the game -->


<script>
  import { onMount } from 'svelte'

  let menuSound
  let inputSound
  let downSound

  let editingPlayer = false
  let selectedPlayerIndex = 0

  let players = [
    { name: 'Player 1', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] },
    { name: 'Player 2', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] },
    { name: 'Player 3', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] },
    { name: 'Player 4', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] },
    { name: 'Player 5', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] },
    { name: 'Player 6', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] },
    { name: 'Player 7', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] },
    { name: 'Player 8', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] }
  ]

  let playerCount = 2 // Default to showing 2 players
  let previousValue = playerCount

  // Filter players based on the selected count
  $: visiblePlayers = players.slice(0, playerCount)

  function updatePlayerCount(count) {
    playerCount = Math.max(2, Math.min(count, players.length)) // Ensure range is between 2 and the max players

    if (playerCount > previousValue) {
      psound() // Up button action
    } else if (playerCount < previousValue) {
      psoundDown() // Down button action
    }
    previousValue = playerCount
  }

  function editPlayer(playerNum) {
    editingPlayer = true
    menuSound.play()

    selectedPlayerIndex = playerNum
  }

  function closePopup() {
    editingPlayer = false
  }

  function psound() {
    inputSound.play()
  }
  function psoundDown() {
    downSound.play()
    // Add your sound logic here
  }

  onMount(() => {
    menuSound = new Audio('src/assets/SFX/menu.mp3')
    inputSound = new Audio('src/assets/SFX/blip.mp3')
    downSound = new Audio('src/assets/SFX/down.mp3')
  })
</script>

<div class="controls">
  <label for="player-count">Select number of players:</label>
  <input
    id="player-count"
    type="number"
    min="2"
    max={players.length}
    bind:value={playerCount}
    on:input={(e) => updatePlayerCount(+e.target.value)}
    style="width: 50px;"
  />
</div>

<div class="pad">
  {#each visiblePlayers as player, i}
    <div class="player-card">
      <div class="card-content">
        <div class="image-row">
          <input class="name" placeholder="Name" bind:value={player.name} />

          <div class="image-container">
            <img src="src/assets/OpCards/CoverUpright.webp" alt="Op Card" class="ops-card-cover" />
            <span class="overlay-number">3</span>
          </div>

          <div class="image-container">
            <img src="src/assets/Icons/BIBLEIcon.webp" alt="Bible Icon" class="xp-icon" />
            <span class="overlay-number">{player.bibleNum}</span>
          </div>

          <div class="image-container">
            <img src="src/assets/Icons/TRACTIcon.webp" alt="Tract Icon" class="xp-icon" />
            <span class="overlay-number">{player.tractNum}</span>
          </div>

          <div class="image-container">
            <img src="src/assets/Icons/FELLOWSHIPIcon.webp" alt="Fellowship Icon" class="xp-icon" />
            <span class="overlay-number">{player.fellowshipNum}</span>
          </div>

          <div class="image-container">
            <img src="src/assets/Icons/XPIcon.webp" alt="XP Icon" class="xp-icon" />
            <span class="overlay-number">{player.xpNum}</span>
          </div>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <span class="overlay-button" on:click={() => editPlayer(i)}>{'≡'}</span>
        </div>
      </div>
    </div>
  {/each}
</div>

{#if editingPlayer}
  <div class="popup">
    <div class="popup-content">
      <h3 style="padding-bottom: 10px;">Editing: {players[selectedPlayerIndex].name}</h3>
      <div class="edit-image-row">
        <div class="field">
          <div class="edit-image-container">
            <img src="src/assets/Icons/BIBLEIcon.webp" alt="Bible Icon" class="edit-xp-icon" />
          </div>
          <input
            class="pnumclass"
            type="number"
            bind:value={players[selectedPlayerIndex].bibleNum}
          />
        </div>

        <div class="field">
          <div class="edit-image-container">
            <img src="src/assets/Icons/TRACTIcon.webp" alt="Tract Icon" class="edit-xp-icon" />
          </div>
          <input
            class="pnumclass"
            type="number"
            bind:value={players[selectedPlayerIndex].tractNum}
          />
        </div>
      </div>

      <div class="edit-image-row">
        <div class="field">
          <div class="edit-image-container">
            <img
              src="src/assets/Icons/FELLOWSHIPIcon.webp"
              alt="Fellowship Icon"
              class="edit-xp-icon"
            />
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
        <button on:click={closePopup}>Done</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .pad {
    padding: 10px;
  }

  .player-card {
    background-color: #f7f7f7;
    padding-top: 6px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .card-content {
    padding: 5px;
  }

  .name {
    color: black;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    width: 100px;
    height: 30px;
    margin-right: 10px;
  }

  label {
    color: black;
    font-size: 16px;
    padding: 15px;
    padding-top: 10px;
    align-self: center;
    align-items: center;
    align-content: center;
    margin-top: 15px;
  }

  .controls {
    padding-top: 10px;
    align-self: center;
    align-items: center;
    align-content: center;
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

  .ops-card-cover,
  .xp-icon {
    width: 35px;
    height: 50px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  .overlay-number {
    position: absolute;
    bottom: 8px;
    right: 1px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 9px;
    padding: 2px 3px;
    border-radius: 30%;
  }

  .overlay-button {
    position: relative;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 20px;
    /* padding: 2px; */
    padding-left: 9px;
    padding-right: 9px;
    border-radius: 30%;
  }

  .overlay-button:active {
    transform: scale(0.95);
  }

  .xp-icon {
    width: 40px;
    height: 50px;
  }

  .popup {
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

  .popup-content {
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    background-color: rgb(36, 35, 35);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: rgb(255, 255, 255);
  }

  .field {
    display: grid;
    grid-template-columns: 50px auto; /* Fixed width for labels, auto width for inputs */
    align-items: center; /* Vertically align items */
    gap: 0.5rem; /* Add spacing between columns */
  }

  .pnumclass {
    max-width: 70px; /* Ensure consistent input width */
    text-align: center; /* Center-align input text */
  }

  .edit-image-container {
    position: relative;
    margin-right: 10px;
  }

  .edit-image-row {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .edit-xp-icon {
    width: 45px;
    height: 60px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: white;
  }

  .popup-buttons {
    margin-top: 15px;
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    /* padding-top: 10px; */
  }

  .popup-buttons button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #444;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.2s;
  }

  h3 {
    color: whitesmoke;
    align-self: center;
    justify-self: center;
    text-justify: center;
  }

  .popup-buttons button:hover {
    background-color: #555;
  }
</style>
