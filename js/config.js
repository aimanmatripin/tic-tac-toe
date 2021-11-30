/**
 * Open Overlay and added player name / Change display none to block
 */

function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // convert string to number using +
  playerConfigOverlay.style.display = 'block';
  backdrop.style.display = 'block';
}

/**
 * Close Overlay from cancel button & backdrop click
 */

function closePlayerConfig() {
  playerConfigOverlay.style.display = 'none';
  backdrop.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutput.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}

/**
 * Updating player name
 */

function savePlayerConfig(event) {
  event.preventDefault(); // Prevent default form submision action
  const formData = new FormData(event.target); // get data from Object blueprint FormData
  const enteredPlayername = formData.get('playername').trim(); // remove whitespaces

  if (!enteredPlayername) {
    // same as enteredPlayername === ''
    event.target.firstElementChild.classList.add('error');
    errorsOutput.textContent = 'Please enter a valid name!';
    return; // stop the execution of the function called
  }

  const updatedPlayerData = document.getElementById(
    'player-' + editedPlayer + '-data'
  );
  updatedPlayerData.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}
