<script>
  // let zoomLevel = 1;
  let position = { x: 0, y: 0 }
  let isPanning = false
  let lastMousePosition = null

  // Functions to zoom in and out
  let scale = 1 // Initial scale (100%)

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

  function resetZoom() {
    scale = 1
    position = { x: 0, y: 0 }
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

<div class="image-container" on:wheel={zoom}> 
    <!-- REMINDER I'll need to wrap all the images in this. -->
  <!-- Image with zoom control and movement via inline styles -->
  <img
    src="src/assets/PreachItBoard.webp"
    alt=""
    style="position: absolute; transform: scale({scale}) translate({position.x}px, {position.y}px); transition: transform 0.3s ease;"
  />

  <!-- Zoom Control Buttons -->
  <div class="controls">
    <label>Player 1: XP: Tracts:</label>
    <label>Player 1: XP: Tracts:</label>

    <!-- <button on:click={zoomIn}>Zoom In</button>
      <button on:click={zoomOut}>Zoom Out</button> -->
    <button on:click={resetZoom}>Center Board</button>
  </div>
</div>

<style>
  /* Centering the container */
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: auto;
  }

  /* Styling the image */
  img {
    transition: transform 0.3s ease;
    /* This will allow smooth scaling */
    max-width: 100%;
    max-height: 100%;
  }

  /* Zoom control buttons */
  .controls {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
  }

  button {
    margin: 5px;
    padding: 10px;
    cursor: pointer;
  }
</style>
