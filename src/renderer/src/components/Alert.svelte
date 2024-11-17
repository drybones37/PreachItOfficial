<script>
  // let showAlert = false;
  // let p1TextAlert = "";
  // let p2TextAlert = "";
  // let yesButtonFuncForAlert = () => {}

  //  function alertFunc(p1Text, p2Text, yesButtonFunc) {
  //   p1TextAlert = p1Text;
  //   p2TextAlert = p2Text;
  //   yesButtonFuncForAlert = yesButtonFunc;
  //   showAlert = true;
  // }

  // function closeAlert() {
  //   showAlert = false;
  // }

  // function handleYesButtonClick() {
  //   yesButtonFuncForAlert();
  //   closeAlert(); 
  // }
</script>

<!-- {#if showAlert}
<div class="custom-alert">
  <div class="alert-content">
    <p>{p1TextAlert}</p>
    <p>{p2TextAlert}</p>
    <div class="alert-buttons">
      <button on:click={handleYesButtonClick}>Yes</button>
      <button on:click={closeAlert}>Cancel</button>
    </div>
  </div>
</div>
{/if} -->

<style>
  /* .custom-alert {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; 
  }

  .alert-content {
    background-color: rgb(36, 35, 35);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    color: white;
    min-width: 300px;
  }

  .alert-buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }

  .alert-buttons button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #444;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.2s;
  }

  .alert-buttons button:hover {
    background-color: #555;
  } */
</style>
