/* Sets up variables 'clicks', 'pass', and 'timeleft'. Assigns the number 0 to the variables 'clicks' and 'pass', and the number 32 to the variable 'timeLeft'. The program will reach into the innerHTML of the text with the id 'timer' and display whatever value 'timeLeft' is set to. */
let clicks = 0
let pass = 0
let timeLeft = 32
const skip = false
const finished = false
document.getElementById('timer').innerHTML = timeLeft
/* Makes constants 'outOfTime' and 'winMusic'. Finds the specified audio elements with id names 'time-out' and 'win-music' and assigns them to the specified constants so that they can be called using the constant's names.  */
const outOfTime = document.querySelector('#time-out')
const winMusic = document.querySelector('#win-music')
/* When the window of the web browser loads the webpage, a function will activate. The opacity of the 'click-text' and 'timer' messages will be reduced to 0.2. A new constant named 'prefaceAudio' will be made that will find the specified audio element with the id name 'preface-instructions' and assigns it to that constant. Then that constant containing the audio will play. */
window.onload = function () {
  document.getElementById('click-text').style.opacity = '0.2'
  document.getElementById('timer').style.opacity = '0.2'
  const prefaceAudio = document.querySelector('#preface-instructions')
  prefaceAudio.play()

  while (!skip) {
    prefaceAudio.onended = function () {
      skip = true
    }
  }

}
/* Once the audio in the 'prefaceAudio' constant has ended, the 'outOfTime' constant audio will play. The image with the id 'button-image2' will be hidden, and the 'button-image' image will be displayed. The innerHTML of the 'game-instructions' text will be changed, and the opacity of the message in the 'click-text' and 'timer' elements will be set to 1. */
outOfTime.play()
document.getElementById('button-image2').style.display = 'none'
document.getElementById('button-image').style.display = 'block'
document.getElementById('game-instructions').innerHTML = 'GOO!'
document.getElementById('click-text').style.opacity = '1'
document.getElementById('timer').style.opacity = '1'
/* Makes a new constant named 'countDownTimer' and assigns a setInterval event that contains a function that will be performed every second to it. If the value of the variable 'timeleft' is less than or equal to 0, then the interval will be cleared so the countdown stops, and the innerHTML of the 'timer' text will be set to 0. Else, the program will display the value of the 'timeleft' variable into the innerHTML of the 'timer' text. */
const countDownTimer = setInterval(function () {
  if (timeLeft <= 0) {
    clearInterval(countDownTimer)
    document.getElementById('timer').innerHTML = '0'
  } else {
    document.getElementById('timer').innerHTML = timeLeft + ''
  }
  /* If the value of the variable 'pass' is equal to 1, then the 'countDownTimer' interval function will be cleared, so it stops from running, the innerHTML of the 'timer' text will say 'Clear', and the colour of that text will change to greenyellow, the width will change to 5.5%, and the background color will be black. */
  if (pass === 1) {
    clearInterval(countDownTimer)
    document.getElementById('timer').innerHTML = 'Clear'
    document.getElementById('timer').style.color = 'greenyellow'
    document.getElementById('timer').style.width = '5.5%'
    document.getElementById('timer').style.backgroundColor = 'black'
  }
  /* The interval event will decrease the value of 'timeleft' by 1 every second. */
  document.getElementById('timer').value = 10 - timeLeft
  timeLeft -= 1
}, 1000)

/* Listens for when the mouse is pressed on the image map element 'button-pressed' and then activates the function 'buttonPushed'. */
document.getElementById('button-pressed').addEventListener('mousedown', buttonPushed)
/* When the function is activated, the image element with the id 'button-released' will be displayed, and the image element with the id 'button-image' will be hidden. */
function buttonPushed() {
  document.getElementById('button-released').style.display = 'block'
  document.getElementById('button-image').style.display = 'none'
}
/* Listens for when the mouse of released from the 'button-released' image element which then activates the function 'buttonReleased' */
document.getElementById('button-released').addEventListener('mouseup', buttonReleased)
/* When the function is activated, the image element 'button-released' will be hidden, and the image element 'button-image' will be displayed. The value of the 'clicks' variable will be increased by 1, and the value of 'clicks' will be displayed in the innerHTML of the 'clicks' element. If the value of 'clicks' is equal to 60, the background image will change, and if it is equal to 100, it will change again. If the value of 'clicks' is equal to 150, then the background image will change and the events of the mouse's cursor on the image element 'button-image' will be disabled, so the user can't change anything with the cursor. The innerHTML of the 'game-instructions' text will change, and will be made italic. The 'next-stage' button will be displayed, and the variable of 'pass' will be increased to 1. The window will be stopped from being able to refresh, the 'outOfTime' constant audio will stop, and the 'winMusic' constant audio will play. */
function buttonReleased() {
  document.getElementById('button-released').style.display = 'none'
  document.getElementById('button-image').style.display = 'block'
  clicks = clicks + 1
  document.getElementById('clicks').innerHTML = clicks
  if (clicks === 60) {
    document.body.style.backgroundImage = "url('./backgrounds/clicker-game-door-opening1.svg')"
  }
  if (clicks === 100) {
    document.body.style.backgroundImage = "url('./backgrounds/clicker-game-door-opening2.svg')"
  }
  if (clicks === 150) {
    document.body.style.backgroundImage = "url('./backgrounds/clicker-game-door-opening3.svg')"
    document.getElementById('button-image').style.pointerEvents = 'none'
    document.getElementById('game-instructions').innerHTML = 'Well done, you may proceed'
    document.getElementById('game-instructions').style.fontStyle = 'italic'
    document.getElementById('next-stage').style.display = 'block'
    pass = pass + 1
    window.stop()
    outOfTime.pause()
    winMusic.play()
  }
}

document.getElementById('skipAudio').addEventListener('click', skipAudio)

function skipAudio() {
  document.getElementById('skipAudio').style.display = 'none'
  prefaceAudio.stop()
  outOfTime.play()
  skip = true
}
