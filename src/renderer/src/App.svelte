<script>
  import imagePath from './assets/PreachItBoard.webp';

  // function handleClick(index) {
  //   if (!board[index] && !winner) {
  //     board[index] = currentPlayer;
  //     if (checkWinner()) {
  //       winner = currentPlayer;
  //     } else {
  //       currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  //     }
  //   }
  // }

 

</script>

<main>

  <div>
    <img src={imagePath} alt="Board" />
</div>
  <!-- <h1>{winner ? `${winner} wins!` : `Current Player: ${currentPlayer}`}</h1> -->
 
 
  <!-- <div class="grid">
    {#each board as cell, index}
      <button class="cell" on:click={() => handleClick(index)} aria-label={`Cell ${index} - ${cell || 'empty'}`}>
        {cell}
      </button>
    {/each}
  </div> -->
  <!-- <button on:click={resetGame}>Reset</button> -->
</main>

<style>
  /* main {
    text-align: center;
    margin-top: 50px;
  } */
  /* .grid {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 10px;
    justify-content: center;
  }
  .cell {
    width: 100px;
    height: 100px;
    background-color: #eee;
    font-size: 2rem;
    cursor: pointer;
    border: none;
    outline: none;
  } */
  /* button {
    margin-top: 20px;
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
  } */

  img {
        max-width: 100%;
        height: auto;
    }
</style>



<!-- <script>
  import Versions from './components/Versions.svelte'
  import electronLogo from './assets/electron.svg'

  const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<img alt="logo" class="logo" src={electronLogo} />
<div class="creator">Powered by electron-vite</div>
<div class="text">
  Build an Electron app with
  <span class="svelte">Svelte</span>
</div>
<p class="tip">Please try pressing <code>F12</code> to open the devTool</p>
<div class="actions">
  <div class="action">
    <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">Documentation</a>
  </div>
  <div class="action">
     svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions a11y-missing-attribute
    <a target="_blank" rel="noreferrer" on:click={ipcHandle}>Send IPC</a>
  </div>
</div>
<Versions /> -->
