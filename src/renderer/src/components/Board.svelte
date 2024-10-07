<script>
  // let zoomLevel = 1;
  let position = { x: 0, y: 0 }
  let isPanning = false
  let lastMousePosition = null

  // Functions to zoom in and out
  let scale = 1 // Initial scale (100%)

  // State to hold the dropped images
  let droppedImages = Array.from({ length: 8 }, () => Array(8).fill(null));
    let imagePositions = Array.from({ length: 8 }, () => Array(8).fill(null)); // To hold image positions
  

 
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

  // Drag-and-drop functions
  function handleDragStart(event, src) {
      event.dataTransfer.setData("text/plain", src); // Store the image src
    }
  
    function handleDrop(event, row, col) {
      event.preventDefault(); // Prevent default behavior
      const src = event.dataTransfer.getData("text/plain"); // Get the dragged image src
  
      // Remove the image from other cells
      for (let r = 0; r < droppedImages.length; r++) {
        for (let c = 0; c < droppedImages[r].length; c++) {
          if (droppedImages[r][c] === src) {
            droppedImages[r][c] = null; // Clear duplicate images
          }
        }
      }
  
      // Store the image in the current cell
      droppedImages[row][col] = src; // Store the image in the grid
  
      // Get mouse position and calculate the image position
      const rect = event.target.getBoundingClientRect();
      const mouseX = event.clientX - rect.left; // X position relative to the cell
      const mouseY = event.clientY - rect.top; // Y position relative to the cell
  
      // Save the position of the dropped image
      imagePositions[row][col] = { x: mouseX, y: mouseY }; 
    }
  
    function allowDrop(event) {
      event.preventDefault(); // Allow dropping
    }

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
  

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  

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
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div 
            class="grid-cell" 
            on:drop={(event) => handleDrop(event, row, col)} 
            on:dragover={allowDrop}
          >
            {#if droppedImages[row][col]}
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img 
                src={droppedImages[row][col]} 
                alt="Dropped Image" 
                class="dropped-image" 
                style="position: absolute; 
                       left: {imagePositions[row][col]?.x}px; 
                       top: {imagePositions[row][col]?.y}px; 
                       width: auto; 
                       height: auto; 
                       max-width: 100%; 
                       max-height: 100%; 
                       object-fit: cover;" 
              />
            {/if}
          </div>
        {/each}
      {/each}
    </div>

    <div class="draggable-images">
      <img 
        style="z-index: 20;"
        src="src/assets/OpCards/Cover.webp" 
        alt="Opportunity Card" 
        draggable="true" 
        on:dragstart={(event) => handleDragStart(event, 'src/assets/OpCards/Cover.webp')}
        class="draggable"
      />
    </div>
    
  
</div>

<!-- Example images to drag -->

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
    pointer-events: auto; 
    position: relative; 
  }

  .dropped-image {
      position: absolute; /* Positioning for dropped images */
      width: auto; 
      height: auto; 
      max-width: 100%; 
      max-height: 100%;
      object-fit: cover;
    }

    .draggable-images {
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }
  
    .draggable {
      width: 50px;
      height: auto;
      cursor: grab;
    }
  
    .draggable:active {
      cursor: grabbing;
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