<script>
  // let zoomLevel = 1;
  let position = { x: 0, y: 0 }
  let isPanning = false
  let lastMousePosition = null

  // Functions to zoom in and out
  let scale = 1 // Initial scale (100%)

  // Opportunity cards
  function opCard() {
    console.log('op card clicked')
  }

  function argCard() {
    console.log('op card clicked')
  }

  // Function to handle zooming in and out
  function zoom(event) {
    event.preventDefault()

    // Change the scale based on the scroll direction
    if (event.deltaY < 0) {
      // Scrolling up - zoom in
      scale += 0.1
    } else {
      // Scrolling down - zoom out
      scale -= 0.1
      if (scale < 0.1) scale = 0.1 // Prevent zooming out too far
    }
  }

  // Event listener for key presses
  window.addEventListener('mousedown', (event) => {
    if (event.button === 2) {
      isPanning = true
    }
  })

  window.addEventListener('mouseup', (event) => {
    if (event.button === 2) {
      isPanning = false
    }
  })

  // Event listener for mouse movements
  window.addEventListener('mousemove', (event) => {
    if (isPanning && lastMousePosition) {
      const deltaX = event.clientX - lastMousePosition.clientX
      const deltaY = event.clientY - lastMousePosition.clientY
      position.x += deltaX
      position.y += deltaY
    }
    lastMousePosition = event
  })

  // Event listener for mouse up
  window.addEventListener('mouseup', () => {
    lastMousePosition = null
  })
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class="image-container" on:wheel={zoom}>
  

  <!-- TODO FIX SVG -->
  <!-- svelte-ignore a11y-missing-attribute -->
  <!-- <object type="image/svg+xml" data="src/assets/OpCard.svg"
  style="position: absolute; transform: scale({scale}) translate({position.x}px, {position.y}px); transition: transform 0.2s ease;">
    Your browser does not support SVG.
  </object> -->

  <!-- <embed type="image/svg+xml" src="src/assets/OpCard.svg"
    style="position: absolute; transform: scale({scale/10}) translate({position.x*10}px, {position.y*10}px); transition: transform 0.2s ease;"/> -->

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- <img
    class="arg-card-clickable"
    on:click={argCard}
    src="src/assets/ArgCards/RedACCoverSideWays.webp"
    alt="Arg cards clickable"
    style="position: absolute; transform: scale({scale / 7.5}) translate({(position.x - 150) *
      7.5}px, {(position.y + 40) * 7.5}px); transition: transform 0.2s ease;"
  /> -->

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- <img
    class="op-card-clickable"
    on:click={opCard}
    src="src/assets/OpCards/Cover.webp"
    alt="Op cards clickable"
    style="position: absolute; transform: scale({scale / 7.5}) translate({(position.x - 80) *
      7.5}px, {(position.y - 40) * 7.5}px); transition: transform 0.2s ease;"
  /> -->
  <img
    class="preach-it-board"
    src="src/assets/PreachItBoard.webp"
    alt=""
    style="position: absolute; transform: scale({scale}) translate({position.x}px, {position.y}px); transition: transform 0.2s ease;"
  />
  <!-- Semi-transparent grid overlay -->
  <div
  class="grid-overlay"
  style="transform: scale({scale}) translate({position.x}px, {position.y}px);"
>
  {#each Array(8) as _, row}
    {#each Array(8) as _, col}
      <div class="grid-cell"></div>
    {/each}
  {/each}
</div>
  
</div>

<style>
  /* Centering the container */
  .image-container {
    position: relative; /* Keep this to position children absolutely */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%; /* Make sure it fills the container */
    height: auto;
    aspect-ratio: 1 / 1;
  }

  .preach-it-board {
    position: absolute; /* Positioning absolute within the relative container */
    top: 0; /* Ensure the image starts at the top */
    left: 0; /* Ensure the image starts at the left */
    width: 100%; /* Make sure it fills the container */
    height: auto; /* Maintain aspect ratio */
    aspect-ratio: 1 / 1;
    transition: transform 0.2s ease; 
    z-index: 0; /* Ensure the board is behind the grid */
  }

  .grid-overlay {
    position: absolute;
    top: 0; /* Align it with the top of the container */
    left: 0; /* Align it with the left of the container */
    /* transform: translate(10%, 10%); */
    width: 100%;   /* Ensure it fills the container */
    height: 100%;  /* Ensure it fills the container */
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    pointer-events: none; /* Prevent grid from blocking clicks */
    z-index: 10; /* Higher than the board */
    padding: 5%;
  }

  .grid-cell {
    border: 1px solid rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.1); /* Semi-transparent background */
  }

  /* Styling the image */
  img {
    transition: transform 0.2s ease;
    /* This will allow smooth scaling */
    max-width: 100%;
    max-height: 100%;
  }

  .arg-card-clickable {
    pointer-events: auto;
    aspect-ratio: 1 / 1;
  }
  .arg-card-clickable:hover {
    cursor: pointer;
  }
  .arg-card-clickable:active {
    cursor: pointer;
    scale: 0.995;
    /* align-self: center; */
    /* width: 95dvw; */
  }

  .op-card-clickable {
    pointer-events: auto;
    aspect-ratio: 1 / 1;
  }
  .op-card-clickable:hover {
    cursor: pointer;
  }
  .op-card-clickable:active {
    cursor: pointer;
    scale: 0.995;
  }
</style>