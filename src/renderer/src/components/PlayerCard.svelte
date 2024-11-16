<script>


  let players = [
    { name: 'Player 1', xpNum: 5, bibleNum: 0, tractNum: 8, fellowshipNum: 3, opCardsList: [] },
    { name: 'Player 2', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] },
    { name: 'Player 3', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] },
    { name: 'Player 4', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] },
    { name: 'Player 5', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] },
    { name: 'Player 6', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] },
    { name: 'Player 7', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] },
    { name: 'Player 8', xpNum: 0, bibleNum: 0, tractNum: 0, fellowshipNum: 0, opCardsList: [] }
  ]

  let playerCount = 2 // Default to showing 2 players

  // Filter players based on the selected count
  $: visiblePlayers = players.slice(0, playerCount)

  function updatePlayerCount(count) {
    playerCount = Math.max(2, Math.min(count, players.length)) // Ensure range is between 2 and the max players
  }

  function editPlayer(playerNum) {
    // TODO Implement player editing logic
  }
</script>

<div class="controls">
  <label for="player-count">Select number of players:</label>
  <input
    id="player-count"
    type="number"
    min="2"
    max={players.length}
    value={playerCount}
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
          <span class="overlay-button" on:click={editPlayer(i)}>{'≡'}</span>
        </div>
      </div>
    </div>
  {/each}
</div>

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
</style>
