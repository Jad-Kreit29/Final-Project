/* Sets up a variable named 'timeLeft' and assigns the number 10 to it. The text element with the id 'timer' will display the value of 'timeLeft' in its innerHTML. */
let timeLeft = 10
document.getElementById('timer').innerHTML = timeLeft
/* Once the window of the web browser loads the webpage, a function will be activated. The div element 'button-set1' will be displayed. A new constant named 'finalAudio' will be made and finds the audio element 'final-stage-music' in the html document that it'll assign back to the constant. That constant audio will be played. */
window.onload = function () {
  document.getElementById('button-set1').style.display = 'block'
  const finalAudio = document.querySelector('#final-stage-music')
  finalAudio.play()
  /* A new constant named 'countDownTimer' will be made and a setInterval event that contains a function that will be performed every second will be assigned to it. If the value of the variable 'timeleft' is less than or equal to 0, then the interval will be cleared so the countdown stops, and the innerHTML of the 'timer' text will be set to 0. Else, the program will display the value of the 'timeleft' variable into the innerHTML of the 'timer' text. */
  const countDownTimer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(countDownTimer)
      document.getElementById('timer').innerHTML = '0'
    } else {
      document.getElementById('timer').innerHTML = timeLeft + ''
    }
    /* The interval event will decrease the value of 'timeleft' by 1 every second. */
    document.getElementById('timer').value = 10 - timeLeft
    timeLeft -= 1
  }, 1000)
}

// Step 1

/* Listens for a click on the button 'option1-2' and activates the function named 'option1' */
document.getElementById('option1-2').addEventListener('click', option1)
/* The div element 'button-set1' will be hidden and replaced by the div element 'button-set2'. The background image of the webpage will be changed along with the innerHTML of the text element 'instruction-text'. */
function option1 () {
  document.getElementById('button-set1').style.display = 'none'
  document.getElementById('button-set2').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background2.svg')"
  document.getElementById('instruction-text').innerHTML = 'Okay, you\'ve waited and a person coming out of the bathroom has opened the door. Now what?'
}

// Step 2

/* Listens for a click on the button 'option2-1' and activates the function named 'option2' */
document.getElementById('option2-1').addEventListener('click', option2)
/* The div element 'button-set2' will be hidden and replaced by the div element 'button-set3'. The background image of the webpage will be changed along with the innerHTML of the text element 'instruction-text'. */
function option2 () {
  document.getElementById('button-set2').style.display = 'none'
  document.getElementById('button-set3').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background3.svg')"
  document.getElementById('instruction-text').innerHTML = 'You\'re in the bathroom. There\'s a very classy sink right in front of you.'
}

// Step 3

/* Listens for a click on the button 'option3-2' and activates the function named 'option3' */
document.getElementById('option3-2').addEventListener('click', option3)
/* The div element 'button-set3' will be hidden and replaced by the div element 'button-set4'. The background image of the webpage will be changed along with the innerHTML of the text element 'instruction-text'. */
function option3 () {
  document.getElementById('button-set3').style.display = 'none'
  document.getElementById('button-set4').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background4.svg')"
  document.getElementById('instruction-text').innerHTML = 'You open the drawer to find a soap dispenser. Good thing you found this! You set it on top of the drawer next to the sink.'
}

// Step 4

/* Listens for a click on the button 'option4-1' and activates the function named 'option4' */
document.getElementById('option4-1').addEventListener('click', option4)
/* The div element 'button-set4' will be hidden and replaced by the div element 'button-set5'. The background image of the webpage will be changed along with the innerHTML of the text element 'instruction-text'. */
function option4 () {
  document.getElementById('button-set4').style.display = 'none'
  document.getElementById('button-set5').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background5.svg')"
  document.getElementById('instruction-text').innerHTML = 'You approach the sink to get a closer look. The virus has reached your knees. HURRY!'
}

// Step 5

/* Listens for a click on the button 'option5-3' and activates the function named 'option5' */
document.getElementById('option5-3').addEventListener('click', option5)
/* The div element 'button-set5' will be hidden and replaced by the div element 'button-set6'. The background image of the webpage will be changed along with the innerHTML of the text element 'instruction-text'. */
function option5 () {
  document.getElementById('button-set5').style.display = 'none'
  document.getElementById('button-set6').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background6.svg')"
  document.getElementById('instruction-text').innerHTML = 'You apply a bit of soap onto your hands. Some of it oozes from the bottle.'
}

// Step 6

/* Listens for a click on the button 'option6-2' and activates the function named 'option6' */
document.getElementById('option6-2').addEventListener('click', option6)
/* The div element 'button-set6' will be hidden and replaced by the div element 'button-set7'. The background image of the webpage will be changed along with the innerHTML of the text element 'instruction-text'. */
function option6 () {
  document.getElementById('button-set6').style.display = 'none'
  document.getElementById('button-set7').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background7.svg')"
  document.getElementById('instruction-text').innerHTML = 'Aaah, water! It\'s turned on now. Is the tempreture comfortable?'
}

// Step 7

/* Listens for a click on the button 'option7-3' and activates the function named 'option7' */
document.getElementById('option7-3').addEventListener('click', option7)
/* The div element 'button-set7' will be hidden and replaced by the div element 'last-input'. The background image of the webpage will be changed along with the innerHTML of the text element 'instruction-text'. */
function option7 () {
  document.getElementById('button-set7').style.display = 'none'
  document.getElementById('last-input').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background8.svg')"
  document.getElementById('instruction-text').innerHTML = 'Okay, now the water is cool enough for your hands. The virus has almost overtaken you! You need to wash your hands NOW!'
}

// Step 8

/* Listens for a click on the button 'last-option' and activates the function named 'lastOption' */
document.getElementById('last-option').addEventListener('click', lastOption)
/* The button element with the id 'last-option' will be hidden, and will be replaced by the button element with the id 'last-option2'. */
function lastOption () {
  document.getElementById('last-option').style.display = 'none'
  document.getElementById('last-option2').style.display = 'block'
}
/* Listens for a click on the button 'last-option2' and activates the function named 'lastOption2' */
document.getElementById('last-option2').addEventListener('click', lastOption2)
/* The button element with the id 'last-option2' will be hidden, and will be replaced by the button element with the id 'last-option3'. */
function lastOption2 () {
  document.getElementById('last-option2').style.display = 'none'
  document.getElementById('last-option3').style.display = 'block'
}
