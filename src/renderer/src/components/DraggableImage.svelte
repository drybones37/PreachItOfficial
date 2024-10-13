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
  
    function handleMouseDown(event) {
      isDragging = true;
      mouseOffset = {
        x: event.clientX - position.x * scale,
        y: event.clientY - position.y * scale,
      };
    }
  
    function handleMouseMove(event) {
      if (isDragging) {
        // Adjust the position of the image based on the mouse movement and scale
        position = {
          x: (event.clientX - mouseOffset.x) / scale,
          y: (event.clientY - mouseOffset.y) / scale,
        };
      }
    }
  
    function handleMouseUp() {
      isDragging = false;
    }
  
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  </script>
  
  <img
    src={src}
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
      max-width: 100%;
      max-height: 100%;
      cursor: grab;
      object-fit: cover;
      z-index: 10;
    }
  </style>
  