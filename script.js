let score = 0
let timer = 20

document.getElementById('button-pressed').addEventListener('mousedown', buttonPushed)

function buttonPushed () {
  document.getElementById('button-released').style.display = 'block'
  document.getElementById('button-image').style.display = 'none'
}

document.getElementById('button-released').addEventListener('mouseup', buttonReleased)

function buttonReleased () {
  document.getElementById('button-released').style.display = 'none'
  document.getElementById('button-image').style.display = 'block'
  score = score + 1
  document.getElementById('score').innerHTML = score
  if (score === 20) {
    document.body.style.backgroundImage = "url('./backgrounds/clicker-game-door-opening1.svg')"
  }
  if (score === 30) {
    document.body.style.backgroundImage = "url('./backgrounds/clicker-game-door-opening2.svg')"
  }
  if (score === 40) {
    document.body.style.backgroundImage = "url('./backgrounds/clicker-game-door-opening3.svg')"
    document.getElementById('button-image').style.pointerEvents = 'none'
  }
}
