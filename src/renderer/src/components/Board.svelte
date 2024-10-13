<script>
  import DraggableImage from './DraggableImage.svelte';
  let position = { x: 0, y: 0 };
  let isPanning = false;
  let lastMousePosition = null;

  // Functions to zoom in and out
  let scale = .65; // Initial scale (100%)

  // State to hold the dropped images (each cell now holds an array of images)
  // let droppedImages = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => []));

  // let imagePositions = Array.from({ length: 8 }, () => Array(8).fill(null)); // To hold image positions

  // Function to handle zooming in and out
  // function zoom(event) {
  //   event.preventDefault();

  //   // Change the scale based on the scroll direction
  //   if (event.deltaY < 0) {
  //     // Scrolling up - zoom in
  //     scale += 0.1;
  //   } else {
  //     // Scrolling down - zoom out
  //     scale -= 0.1;
  //     if (scale < 0.1) scale = 0.1; // Prevent zooming out too far
  //   }
  // }

  window.addEventListener("mousedown", (event) => {
    if (event.button === 2) {
      isPanning = true;
    }
  });

  window.addEventListener("mouseup", (event) => {
    if (event.button === 2) {
      isPanning = false;
    }
  });

  // function handleDrop(event, row, col) {
  //   event.preventDefault(); // Prevent default behavior
  //   const src = event.dataTransfer.getData("text/plain"); // Get the dragged image src

  //   // Remove the image from other cells
  //   for (let r = 0; r < droppedImages.length; r++) {
  //     for (let c = 0; c < droppedImages[r].length; c++) {
  //       const index = droppedImages[r][c].indexOf(src);
  //       if (index !== -1) {
  //         // If the image exists in this cell, remove it
  //         droppedImages[r][c].splice(index, 1);
  //       }
  //     }
  //   }

  //   // Check if the image is already in the current cell
  //   if (!droppedImages[row][col].includes(src)) {
  //     droppedImages[row][col].push(src); // Add the image to the array if it's not already present
  //   }

  //   // Get mouse position and calculate the image position
  //   const rect = event.target.getBoundingClientRect();
  //   const mouseX = event.clientX - rect.left; // X position relative to the cell
  //   const mouseY = event.clientY - rect.top; // Y position relative to the cell

  //   // Save the position of the dropped image (optional)
  //   imagePositions[row][col] = { x: mouseX, y: mouseY };
  // }

  // function allowDrop(event) {
  //   event.preventDefault(); // Allow dropping
  // }

  window.addEventListener("mousemove", (event) => {
    if (isPanning && lastMousePosition) {
      const deltaX = event.clientX - lastMousePosition.clientX;
      const deltaY = event.clientY - lastMousePosition.clientY;
      position.x += deltaX;
      position.y += deltaY;
    }
    lastMousePosition = event;
  });

  window.addEventListener("mouseup", () => {
    lastMousePosition = null;
  });
</script>

<div class="image-container" > 
  <!-- on:wheel={zoom} -->
  <img
    class="preach-it-board"
    src="src/assets/PreachItBoard.webp"
    alt=""
    style="position: absolute; transform: scale({scale}) translate({position.x}px, {position.y}px); transition: transform 0.2s ease;"
  />

  <!-- Use the DraggableImage component with offsets to follow zoom and pan -->
  <DraggableImage src="src/assets/Charac/AfricanBlue.webp" scale={scale} offsetX={position.x} offsetY={position.y} initialX={100} initialY={100} />
  <DraggableImage src="path_to_your_image2" scale={scale} offsetX={position.x} offsetY={position.y} initialX={200} initialY={200} />
  <!-- <div class="grid-overlay" style="transform: scale({scale}) translate({position.x}px, {position.y}px);">
    {#each Array(8) as _, row}
      {#each Array(8) as _, col}
        <div class="grid-cell" on:drop={(event) => handleDrop(event, row, col)} on:dragover={allowDrop}>
          {#each droppedImages[row][col] as image}
            <img
              src={image}
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
          {/each}
        </div>
      {/each}
    {/each}
  </div> -->
</div>

<style>
  .image-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
  }

  .preach-it-board {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    transition: transform 0.2s ease;
    z-index: 0;
  }

  /* .grid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    pointer-events: none;
    z-index: 10;
    padding: 5%;
  }

  .grid-cell {
    border: 1px solid rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.1);
    pointer-events: auto;
    position: relative;
  } */
/* 
  .dropped-image {
    position: absolute;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  } */
</style>
