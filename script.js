let clicks = 0

const myAudio = document.querySelector('#time-out')

window.onload = function () {
  document.getElementById('click-text').style.opacity = '0.2'
  const prefaceAudio = document.querySelector ('#preface-instructions')
  prefaceAudio.play()
  prefaceAudio.onended = function () {
    myAudio.play()
    document.getElementById('button-image2').style.display = 'none'
    document.getElementById('button-image').style.display = 'block'
    document.getElementById('game-instructions').innerHTML = 'GOO!'
    document.getElementById('click-text').style.opacity = '1'
  }
}

document.getElementById('button-pressed').addEventListener('mousedown', buttonPushed)

function buttonPushed () {
  document.getElementById('button-released').style.display = 'block'
  document.getElementById('button-image').style.display = 'none'
}

document.getElementById('button-released').addEventListener('mouseup', buttonReleased)

function buttonReleased () {
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
    document.getElementById('nextStage').style.display = 'block'
    myAudio.pause()
  }
}
