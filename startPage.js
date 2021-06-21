const startGame = document.querySelector('#start-game-button')

window.onload = function () {
  startGame.disabled = true
}

const audioBtn = document.querySelector('#play-sound')
const warningAudio = document.querySelector('#warning-sound')
audioBtn.addEventListener('click', () => {
  warningAudio.play()
  startGame.disabled = false
  audioBtn.disabled = true
})
