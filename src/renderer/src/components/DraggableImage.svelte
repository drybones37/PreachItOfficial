<script>
  export let src; // Image source
  export let initialX = 0; // Initial X position
  export let initialY = 0; // Initial Y position
  export let scale = 1; // Scaling value
  export let offsetX = 0; // Pan offset X
  export let offsetY = 0; // Pan offset Y

  let isDragging = false;
  let mouseOffset = { x: 0, y: 0 };
  let position = { x: initialX, y: initialY };

  // Triggered when mouse button is pressed on the image
  function handleMouseDown(event) {
    isDragging = true;
    mouseOffset = {
      x: event.clientX - position.x * scale,
      y: event.clientY - position.y * scale,
    };

    // Prevent unintended text selection during drag
    event.preventDefault();
  }

  // Updates the position while dragging
  function handleMouseMove(event) {
    if (isDragging) {
      position = {
        x: (event.clientX - mouseOffset.x) / scale,
        y: (event.clientY - mouseOffset.y) / scale,
      };
    }
  }

  // Stops dragging when mouse button is released
  function handleMouseUp() {
    isDragging = false;
  }

  // Add and remove global event listeners
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-img-redundant-alt -->
<img
  {src}
  alt="Draggable Image"
  class="draggable-image"
  style="
      left: {position.x}px;
      top: {position.y}px;
      transform: scale({scale}) translate({offsetX / scale}px, {offsetY / scale}px);
    "
  on:mousedown={handleMouseDown}
/>

<style>
  .draggable-image {
    position: absolute;
    width: auto;
    height: auto;
    max-width: 10%;
    max-height: 10%;
    cursor: grab;
    object-fit: cover;
    z-index: 10;
    user-select: none; /* Disable text selection */
  }
  .draggable-image:active {
    cursor: grabbing;
  }
</style>
