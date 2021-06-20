let answer = 0
let score = 1

const myAudio = document.querySelector('#time-out')
myAudio.volume = (1)

window.onload = function () {
  const prefaceAudio = document.querySelector('#preface-audio')
  prefaceAudio.play()
  prefaceAudio.onended = function () {
    myAudio.play()
    document.getElementById('math-instructions').style.display = 'none'
    document.getElementById('math-game-text-container').style.display = 'block'
    document.getElementById('input-container').style.display = 'block'
    document.getElementById('math-game-text').innerHTML = '1: 2 + 2'
  }
}

document.getElementById('answer-button').addEventListener('click', answerQuestion)

function answerQuestion () {
  answer = document.getElementById('answer').value
  answer = parseInt(answer)
  if (answer !== 4 && answer !== 72 && answer !== 64 && answer !== 11 && answer !== 5 && answer !== 6 && answer !== 38 && answer !== 54 && answer !== 76 && answer !== 1) {
    document.getElementById('incorrect-answer').style.display = 'block'
  }
  if ((answer === 4) && (score === 1)) {
    score = 2
    document.getElementById('math-game-text').innerHTML = '2: 6 x 12'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  if ((answer === 72) && (score === 2)) {
    score = 3
    document.getElementById('math-game-text').innerHTML = '3: 8 x 8'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  if ((answer === 64) && (score === 3)) {
    score = 4
    document.getElementById('math-game-text').innerHTML = '4: 16 - 5'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  if ((answer === 11) && (score === 4)) {
    score = 5
    document.getElementById('math-game-text').innerHTML = '5: 25 ÷ 5'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  if ((answer === 5) && (score === 5)) {
    score = 6
    document.getElementById('math-game-text').innerHTML = '6: 13 - 7'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  if ((answer === 6) && (score === 6)) {
    score = 7
    document.getElementById('math-game-text').innerHTML = '7: 19 + 19'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  if ((answer === 38) && (score === 7)) {
    score = 8
    document.getElementById('math-game-text').innerHTML = '8: 67 - 13'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  if ((answer === 54) && (score === 8)) {
    score = 9
    document.getElementById('math-game-text').innerHTML = '9: 19 x 4'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  if ((answer === 76) && (score === 9)) {
    score = 10
    document.getElementById('math-game-text').innerHTML = '10: 100 ÷ 100'
    document.getElementById('answer').value = ''
    document.getElementById('incorrect-answer').style.display = 'none'
  }
  if ((answer === 1) && (score === 10)) {
    document.getElementById('incorrect-answer').style.display = 'none'
    document.getElementById('math-game-text').innerHTML = 'You did it...yay. You may move on, but I won\'t be defeated next time!'
    document.getElementById('math-game-text').style.fontSize = '30px'
    document.getElementById('input-container').style.display = 'none'
    myAudio.pause()
    document.getElementById('game-win-button').style.display = 'block'
  }
}
