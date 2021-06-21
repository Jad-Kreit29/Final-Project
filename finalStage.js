let timeLeft = 20
document.getElementById('timer').innerHTML = timeLeft

window.onload = function () {
  document.getElementById('button-set1').style.display = 'block'
  const finalAudio = document.querySelector('#final-stage-music')
  finalAudio.play()
  const countDownTimer = setInterval (function (){
    if (timeLeft <= 0) {
      clearInterval(countDownTimer)
      document.getElementById('timer').innerHTML = '0'
    } else {
      document.getElementById('timer').innerHTML = timeLeft + ''
    }
    document.getElementById('timer').value = 10 - timeLeft
    timeLeft -= 1
  }, 1000)
}

// Step 1

document.getElementById('option1-2').addEventListener('click', option1)

function option1 () {
  document.getElementById('button-set1').style.display = 'none'
  document.getElementById('button-set2').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background2.svg')"
  document.getElementById('instruction-text').innerHTML = 'Okay, you\'ve waited and a person coming out of the bathroom has opened the door. Now what?'
}

// Step 2

document.getElementById('option2-1').addEventListener('click', option2)

function option2 () {
  document.getElementById('button-set2').style.display = 'none'
  document.getElementById('button-set3').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background3.svg')"
  document.getElementById('instruction-text').innerHTML = 'You\'re in the bathroom. There\'s a very classy sink right in front of you.'
}

// Step 3

document.getElementById('option3-2').addEventListener('click', option3)

function option3 () {
  document.getElementById('button-set3').style.display = 'none'
  document.getElementById('button-set4').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background4.svg')"
  document.getElementById('instruction-text').innerHTML = 'You open the drawer to find a soap dispenser. Good thing you found this! You set it on top of the drawer next to the sink.'
}

// Step 4

document.getElementById('option4-1').addEventListener('click', option4)

function option4 () {
  document.getElementById('button-set4').style.display = 'none'
  document.getElementById('button-set5').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background5.svg')"
  document.getElementById('instruction-text').innerHTML = 'You approch the sink to get a closer look. The virus has reached your knees. HURRY!'
}

// Step 5

document.getElementById('option5-3').addEventListener('click', option5)

function option5 () {
  document.getElementById('button-set5').style.display = 'none'
  document.getElementById('button-set6').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background6.svg')"
  document.getElementById('instruction-text').innerHTML = 'You apply a bit of soap onto your hands. Some of it oozes from the bottle.'
}

// Step 6

document.getElementById('option6-2').addEventListener('click', option6)

function option6 () {
  document.getElementById('button-set6').style.display = 'none'
  document.getElementById('button-set7').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background7.svg')"
  document.getElementById('instruction-text').innerHTML = 'Aaah, water! It\'s turned on now. Is the tempreture comfortable?'
}

// Step 7

document.getElementById('option7-3').addEventListener('click', option7)

function option7 () {
  document.getElementById('button-set7').style.display = 'none'
  document.getElementById('last-input').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background8.svg')"
  document.getElementById('instruction-text').innerHTML = 'Okay, now the water is cool enough for your hands. The virus has almost overtaken you! You need to wash your hands NOW!'
}

// Step 8

document.getElementById('last-option').addEventListener('click', lastOption)

function lastOption () {
  document.getElementById('last-option').style.display = 'none'
  document.getElementById('last-option2').style.display = 'block'
}

document.getElementById('last-option2').addEventListener('click', lastOption2)

function lastOption2 () {
  document.getElementById('last-option2').style.display = 'none'
  document.getElementById('last-option3').style.display = 'block'
}
