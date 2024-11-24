<script>
  import DraggableImage from './DraggableImage.svelte'

  import { piecesSelectedList } from './piecesStore';

  let items = [];
  piecesSelectedList.subscribe((list) => {
    items = list;
  });

  let position = { x: 0, y: 0 }
  let isPanning = false
  let lastMousePosition = null

  let scale = 0.7 // Initial scale (100%)

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

  window.addEventListener('mousemove', (event) => {
    if (isPanning && lastMousePosition) {
      const deltaX = event.clientX - lastMousePosition.clientX
      const deltaY = event.clientY - lastMousePosition.clientY
      position.x += deltaX
      position.y += deltaY
    }
    lastMousePosition = event
  })

  window.addEventListener('mouseup', () => {
    lastMousePosition = null
  })
</script>

<div class="image-container">
  <!-- on:wheel={zoom} -->
  <img
    class="preach-it-board"
    src="src/assets/PreachItBoard.webp"
    alt=""
    style="position: absolute; transform: scale({scale}) translate({position.x}px, {position.y}px); transition: transform 0.2s ease;"
  />
  <!-- Use the DraggableImage component with offsets to follow zoom and pan -->
  <!-- <DraggableImage
    src="src/assets/Charac/AfricanBlue.webp"
    {scale}
    offsetX={position.x}
    offsetY={position.y}
    initialX={100}
    initialY={100}
  /> -->
</div>

{#each items as item}
    <DraggableImage
      src={item}
      {scale}
      offsetX={position.x}
      offsetY={position.y}
      initialX={100}
      initialY={100}
    />
  {/each}

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
</style>
