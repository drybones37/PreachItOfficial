<script>
    let timeInput = "0:30"; // Initial input time
    let timer = null; // To store the interval ID
    let isRunning = false; // Flag to check if the timer is running
  
    // Parse the time string and convert it to total seconds
    function timeToSeconds(time) {
      const [minutes, seconds] = time.split(":").map(Number);
      return minutes * 60 + seconds;
    }
  
    // Convert seconds back to time format
    function formatTime(seconds) {
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${m}:${s < 10 ? "0" + s : s}`; // Add leading zero to seconds if necessary
    }
  
    // Start the timer
    function startTimer() {
      if (isRunning) return; // Avoid starting multiple intervals
      let totalSeconds = timeToSeconds(timeInput);
  
      if (totalSeconds > 0) {
        isRunning = true;
        
        timer = setInterval(() => {
          totalSeconds--;
          timeInput = formatTime(totalSeconds); // Update the input with countdown
  
          if (totalSeconds <= 0) {
            clearInterval(timer);
            isRunning = false;
            // TODOTrigger "time is up event"!
          }
        }, 1000);
      }
    }
  
    // Stop the timer
    function stopTimer() {
      clearInterval(timer);
      isRunning = false;
    }
  
    // Reset the timer
    
  </script>
  
  <div class="card">
    <div class="timer">
      <input
        type="text"
        bind:value={timeInput}
        placeholder="Set time (e.g., 1:30)"
        disabled={isRunning} 
      />
    </div>
  
    <div class="controls">
      <div class="column-time">
        <p class="start" on:click={startTimer}>Start</p>
        <p class="stop" on:click={stopTimer}>Stop</p>
        <!-- <p class="reset" on:click={resetTimer}>Reset</p> -->
      </div>
    </div>
  </div>
  
  <style>
    .timer {
      font-size: 7vh;
      cursor: pointer;
      user-select: none;
      display: inline-block;
      transition: transform 0.1s ease;
      color: black;
    }
  
    .start:active,
    .stop:active
 {
      transform: scale(0.90);
    }
  
    .column-time {
      display: flex;
      flex-direction: column;
      font-size: 2.5vh;
      justify-content: space-around;
      align-items: center;
    }

    p{
        font-size: 2.5vh;
        color: black;
    }
  
    .card {
      position: absolute;
      bottom: 20px;
      left: 20px;
      background-color: #f7f7f7;
      border: 1px solid #ddd;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      align-items:center;
      width: 30%;
      height: 10%;
    }
  

    /* Remove the padding and make the UI better  */
    input {
    align-self: center;
      font-size: 5vh;
      text-align: center;
      /* padding: 5px; */
      background-color: rgba(0, 0, 0, 0);
      border:#dddddd00;
      width: 75%;
      height: 10%;
      padding: 0px;
    }
  </style>
  