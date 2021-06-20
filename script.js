let score = 0
let timer = 20

function buttonPushed () {
  document.getElementById('button-pressed').style.display = 'block'
  document.getElementById('button-image').style.display = 'none'
}

function buttonReleased () {
  document.getElementById('button-pressed').style.display = 'none'
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
