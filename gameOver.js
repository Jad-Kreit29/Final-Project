/* When the window of the web browser loads the webpage, a function is activated. A new constant named 'gameOver' is made. The audio element in the html document named 'game-over-audio' will be assigned to that constant. That constant containing the audio will be played. */
window.onload = function () {
  const gameOver = document.querySelector('#game-over-audio')
  gameOver.play()
}
