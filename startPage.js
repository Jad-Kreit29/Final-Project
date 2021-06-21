/* A new constant named 'startGame' is made. The button element in the html document named 'start-game-button' is found and assigned to the constant. */
const startGame = document.querySelector('#start-game-button')
/* When the window of the web browser loads the webpage, a function is activated. The 'startGame' constant made beforehand is disabled. */
window.onload = function () {
  startGame.disabled = true
}
/* A new constant named 'audioBtn' is made. The button element named 'play-sound' will be found within the html document and assigned to the constant. */
const audioBtn = document.querySelector('#play-sound')
/* A new constant named 'warningAudio' is made. The audio element named 'warning-sound' will be found within the html document and assigned to the constant. */
const warningAudio = document.querySelector('#warning-sound')
/* Listens for a click on the constant 'audioBtn' which then activates a function. The constant audio 'warningAudio' is played, the constant 'startGame' button is re-enabled, and the constant 'audioBtn' button element is disabled. */
audioBtn.addEventListener('click', () => {
  warningAudio.play()
  startGame.disabled = false
  audioBtn.disabled = true
})
