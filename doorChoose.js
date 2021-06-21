/* When the window of the web browser loads the webpage, a function is activated. A new constant named 'pickDoor' is made. The audio element in the html document named 'pick-any-door' will be assigned to that constant. That constant containing the audio will be played. */
window.onload = function () {
  const pickDoor = document.querySelector('#pick-any-door')
  pickDoor.play()
}
