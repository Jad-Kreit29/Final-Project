/* Sets up variables 'answer', 'question', and 'pass'. Assigns the numbers 0 to the 'answer' and 'pass', and the number 1 to 'question'. */
let answer = 0
let question = 1
let pass = 0
/* Sets up a variable named 'timeLeft' and assigns the number 10 to it. The text element with the id 'timer' will display the value of 'timeLeft' in its innerHTML. */
let timeLeft = 32
document.getElementById('timer').innerHTML = timeLeft
/* Makes new constants named 'outOfTime' and 'winMusic' and finds the specified audio elements from the html document, 'time-out' and 'win-music', and assigns to those specific variables. */
const outOfTime = document.querySelector('#time-out')
const winMusic = document.querySelector('#win-music')
/* When the window of the web browser loads the webpage, a function is activated. A new constant named 'prefaceAudio' is made and assigned with the specific audio element 'preface-audio' from the html document. That audio constant will be played. The opacity of the text element 'timer' is set to 0.2. */
window.onload = function () {
  const prefaceAudio = document.querySelector('#preface-audio')
  prefaceAudio.play()
  document.getElementById('timer').style.opacity = '0.2'
  /* Once the 'prefaceAudio' ends, the 'outOfTime' constant containing the assigned audio will be played. The opacity of the 'timer' text is set to 1. The text element 'math-instructions' will be hidden, and the 'math-game-text-container' div element is displayed along with the 'input-container' div element. The 'math-game-text' innerHTML will be changed. */
  prefaceAudio.onended = function () {
    outOfTime.play()
    document.getElementById('timer').style.opacity = '1'
    document.getElementById('math-instructions').style.display = 'none'
    document.getElementById('math-game-text-container').style.display = 'block'
    document.getElementById('input-container').style.display = 'block'
    document.getElementById('math-game-text').innerHTML = '1: 2 + 2'
    /* A new constant named 'countDownTimer' will be made and a setInterval event that contains a function that will be performed every second will be assigned to it. If the value of the variable 'timeleft' is less than or equal to 0, then the interval will be cleared so the countdown stops, and the innerHTML of the 'timer' text will be set to 0. Else, the program will display the value of the 'timeleft' variable into the innerHTML of the 'timer' text. */
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
  }
}
/* Listens for a click on the button with the id 'answer-button' and activates the function 'answerQuestion' */
document.getElementById('answer-button').addEventListener('click', answerQuestion)
/* Whatever value was typed into the input box with the id of 'answer' is assigned to the variable 'answer' and set to an integer. If the value of 'answer' is NOT 4 and 72 and 64 and 11 and 5 and 6 and 38 and 54 and 76 and 1, then the div element 'incorrect-answer' will be displayed. */
function answerQuestion () {
  answer = document.getElementById('answer').value
  answer = parseInt(answer)
  if (answer !== 4 && answer !== 72 && answer !== 64 && answer !== 11 && answer !== 5 && answer !== 6 && answer !== 38 && answer !== 54 && answer !== 76 && answer !== 1) {
    document.getElementById('incorrect-answer').style.display = 'block'
  }
  /* If the value of 'answer' is equal to 4 AND the value of question is equal to '1', then the value of 'question' will be set to 2, the innerHTML of the text element with the id 'math-game-text' will be changed, anything typed into the input box will be cleared, and the div element 'incorrect-answer' is hidden. */
  if ((answer === 4) && (question === 1)) {
    question = 2
    document.getElementById('math-game-text').innerHTML = '2: 6 x 12'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  /* If the value of 'answer' is equal to 72 AND the value of question is equal to '2', then the value of 'question' will be set to 3, the innerHTML of the text element with the id 'math-game-text' will be changed, anything typed into the input box will be cleared, and the div element 'incorrect-answer' is hidden. */
  if ((answer === 72) && (question === 2)) {
    question = 3
    document.getElementById('math-game-text').innerHTML = '3: 8 x 8'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  /* If the value of 'answer' is equal to 64 AND the value of question is equal to '3', then the value of 'question' will be set to 4, the innerHTML of the text element with the id 'math-game-text' will be changed, anything typed into the input box will be cleared, and the div element 'incorrect-answer' is hidden. */
  if ((answer === 64) && (question === 3)) {
    question = 4
    document.getElementById('math-game-text').innerHTML = '4: 16 - 5'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  /* If the value of 'answer' is equal to 11 AND the value of question is equal to '4', then the value of 'question' will be set to 5, the innerHTML of the text element with the id 'math-game-text' will be changed, anything typed into the input box will be cleared, and the div element 'incorrect-answer' is hidden. */
  if ((answer === 11) && (question === 4)) {
    question = 5
    document.getElementById('math-game-text').innerHTML = '5: 25 ÷ 5'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  /* If the value of 'answer' is equal to 5 AND the value of question is equal to '5', then the value of 'question' will be set to 6, the innerHTML of the text element with the id 'math-game-text' will be changed, anything typed into the input box will be cleared, and the div element 'incorrect-answer' is hidden. */
  if ((answer === 5) && (question === 5)) {
    question = 6
    document.getElementById('math-game-text').innerHTML = '6: 13 - 7'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  /* If the value of 'answer' is equal to 6 AND the value of question is equal to '6', then the value of 'question' will be set to 7, the innerHTML of the text element with the id 'math-game-text' will be changed, anything typed into the input box will be cleared, and the div element 'incorrect-answer' is hidden. */
  if ((answer === 6) && (question === 6)) {
    question = 7
    document.getElementById('math-game-text').innerHTML = '7: 19 + 19'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  /* If the value of 'answer' is equal to 38 AND the value of question is equal to '7', then the value of 'question' will be set to 8, the innerHTML of the text element with the id 'math-game-text' will be changed, anything typed into the input box will be cleared, and the div element 'incorrect-answer' is hidden. */
  if ((answer === 38) && (question === 7)) {
    question = 8
    document.getElementById('math-game-text').innerHTML = '8: 67 - 13'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  /* If the value of 'answer' is equal to 54 AND the value of question is equal to '8', then the value of 'question' will be set to 9, the innerHTML of the text element with the id 'math-game-text' will be changed, anything typed into the input box will be cleared, and the div element 'incorrect-answer' is hidden. */
  if ((answer === 54) && (question === 8)) {
    question = 9
    document.getElementById('math-game-text').innerHTML = '9: 19 x 4'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  /* If the value of 'answer' is equal to 76 AND the value of question is equal to '9', then the value of 'question' will be set to 10, the innerHTML of the text element with the id 'math-game-text' will be changed, anything typed into the input box will be cleared, and the div element 'incorrect-answer' is hidden. */
  if ((answer === 76) && (question === 9)) {
    question = 10
    document.getElementById('math-game-text').innerHTML = '10: 100 ÷ 100'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  /* If the value of 'answer' is equal to 1 AND the value of question is equal to '10', then the div element 'incorrect-answer' is hidden, and the innerHTML of the text element 'math-game-text' will be changed along with changing its font size to 30px. The div element 'input-container' will be hidden, and the constant audio 'outOfTime' will be paused. The button element 'game-win-button' will be shown, and the value of the 'pass' variable is increased by 1. The window will be stopped from refreshing, and the constant audio 'winMusic' is played. */
  if ((answer === 1) && (question === 10)) {
    document.getElementById('incorrect-answer').style.display = 'none'
    document.getElementById('math-game-text').innerHTML = 'You did it...yay. You may move on, but I won\'t be defeated next time!'
    document.getElementById('math-game-text').style.fontSize = '30px'
    document.getElementById('input-container').style.display = 'none'
    outOfTime.pause()
    document.getElementById('game-win-button').style.display = 'block'
    pass = pass + 1
    window.stop()
    winMusic.play()
  }
}
