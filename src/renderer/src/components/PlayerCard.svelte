<script>
  let opCards = 'src/assets/OpCards/CoverUpright.webp'
  let xpIcon = 'src/assets/Icons/XPIcon.webp'
  let bibleIcon = 'src/assets/Icons/BIBLEIcon.webp'
  let tractIcon = 'src/assets/Icons/TRACTIcon.webp'
  let fellowshipIcon = 'src/assets/Icons/FELLOWSHIPIcon.webp'

  let opCardAlt = 'Op cards'
  let xpAlt = 'XP Icon'
  let bibleAlt = 'Bible Icon'
  let tractAlt = 'Tract Icon'
  let fellowshipAlt = 'Fellowship Icon'

  // Player info TODO make this into an object
  let opCardsList = [];
  let opCardNum = opCardsList.length;
  let xpNum = 5
  let bibleNum = 10
  let tractNum = 8
  let fellowshipNum = 3
  let pname = 'Ash' + ':'

  //
</script>

<div class="pad">
  <div class="player-card">
    <div class="card-content">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <div class="image-row">
        <label class="card-label">
          {pname}
        </label>

        <div class="image-container">
          <img src={opCards} alt={opCardAlt} class="ops-card-cover" />
          <span class="overlay-number">{opCardNum}</span>
        </div>

        <div class="image-container">
          <img src={bibleIcon} alt={bibleAlt} class="xp-icon" />
          <span class="overlay-number">{bibleNum}</span>
        </div>

        <div class="image-container">
          <img src={tractIcon} alt={tractAlt} class="xp-icon" />
          <span class="overlay-number">{tractNum}</span>
        </div>

        <div class="image-container">
          <img src={fellowshipIcon} alt={fellowshipAlt} class="xp-icon" />
          <span class="overlay-number">{fellowshipNum}</span>
        </div>

        <div class="image-container">
          <img src={xpIcon} alt={xpAlt} class="xp-icon" />
          <span class="overlay-number">{xpNum}</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .pad {
    padding: 10px;
  }

  .player-card {
    background-color: #f7f7f7;
    padding-top: 6px;
    border: 1px solid #ddd;
    border-radius: 10px;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    margin-bottom: 0px;
  }

  .card-content {
    padding: 5px;
  }

  .card-label {
    display: flex;
    flex-direction: column;
    color: black;
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .image-row {
  display: flex;
  justify-content: space-between; /* Distribute the items evenly */
  align-items: center;
  width: 100%; /* Make sure the row takes full width */
}

  .image-container {
    position: relative;
    margin-right: 10px;
  }

  .ops-card-cover,
  .xp-icon {
    width: 35px;
    height: 50px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  .overlay-number {
    position: absolute;
    bottom: 8px;
    right: 1px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 9px;
    /* this will apply to <body> */
    /* your styles go here */
    padding: 2px 3px;
    border-radius: 30%;
  }

  .xp-icon {
    width: 40px;
    height: 50px;
  }
</style>
