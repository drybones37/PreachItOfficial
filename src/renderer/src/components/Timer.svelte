<script>
  import { onMount } from 'svelte'

  let timeInput = '2:00' // Initial input time
  let timer = null // To store the interval ID
  let isRunning = false // Flag to check if the timer is running
  let alarmSound
  let startButtonS
  let stopButtonS
  let tickingSound

  onMount(() => {
    alarmSound = new Audio('./src/assets/SFX/timerOver.mp3')
    tickingSound = new Audio('./src/assets/SFX/timerWarning7sec.mp3')
  
    startButtonS = new Audio('./src/assets/SFX/start.mp3')
    stopButtonS = new Audio('./src/assets/SFX/stop.mp3')
  })

  // Parse the time string and convert it to total seconds
  function timeToSeconds(time) {
    const [minutes, seconds] = time.split(':').map(Number)
    return minutes * 60 + seconds
  }

  // Convert seconds back to time format
  function formatTime(seconds) {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s < 10 ? '0' + s : s}` // Add leading zero to seconds if necessary
  }

  // Start the timer
  function startTimer() {
    startButtonS.play()
    if (isRunning) return // Avoid starting multiple intervals
    let totalSeconds = timeToSeconds(timeInput)

    if (totalSeconds > 0) {
      isRunning = true

      timer = setInterval(() => {
        totalSeconds--
        timeInput = formatTime(totalSeconds)
        
        if (totalSeconds == 7){
          tickingSound.play()
        }

        if (totalSeconds <= 0) {
          alarmSound.play()
          clearInterval(timer)
          isRunning = false
          // TODO: Trigger "time is up" event!
        }
      }, 1000)
    }
  }

  // Stop the timer
  function stopTimer() {
    stopButtonS.play()
    clearInterval(timer)
    isRunning = false
  }
</script>

<!-- Card container -->
<div class="card">
  <!-- Timer input field -->
  <input
    type="text"
    bind:value={timeInput}
    placeholder="Set time (e.g., 1:30)"
    disabled={isRunning}
  />

  <!-- Controls for Start and Stop buttons -->
  <div class="controls">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <p class="start" on:click={startTimer}>Start</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <p class="stop" on:click={stopTimer}>Stop</p>
  </div>
</div>

<!-- Styles -->
<style>
  .card {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 20%;
    height: 10%;
    padding: 10px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 999;
  }

  /* Style for the input (time field) */
  input {
    font-size: 5vh;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    width: 50%; /* Adjust width to take half of the space */
    height: 100%; /* Adjust height to fit the container */
    padding: 0px;
    margin-right: 10px; /* Add spacing between the input and buttons */
  }

  /* Controls for the buttons */
  .controls {
    display: flex;
    /* justify-content: space-around; */
    flex-direction: column;
    align-items: center;
    width: 35%; /* Adjust width to take half of the space */
  }

  /* Style for start and stop buttons */
  p {
    /* padding: 10px; */
    font-size: 2.5vh;
    color: black;
    cursor: pointer;
    /* padding: 10px; */
    background-color: #00000000;
    color: rgb(0, 0, 0);
    border-radius: 5px;
    text-align: center;
    
  }

  /* .start:hover, .stop:hover {
  background-color: #555;
} */

  .start:active,
  .stop:active {
    transform: scale(0.9);
  }
</style>
