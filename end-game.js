/* When the window of the web browser loads the webpage, a function is activated. A new constant named 'gameEnd' is made. The audio element in the html document named 'end-game-audio' will be assigned to that constant. That constant containing the audio will be played. */
window.onload = function () {
  const gameEnd = document.querySelector('#end-game-audio')
  gameEnd.play()
}
