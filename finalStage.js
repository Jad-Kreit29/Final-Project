window.onload = function () {
  document.getElementById('button-set1').style.display = 'block'
}

// Step 1

document.getElementById('option1-2').addEventListener('click', option1)

function option1 () {
  document.getElementById('button-set1').style.display = 'none'
  document.getElementById('button-set2').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background2.svg')"
}

// Step 2

document.getElementById('option2-1').addEventListener('click', option2)

function option2 () {
  document.getElementById('button-set2').style.display = 'none'
  document.getElementById('button-set3').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background3.svg')"
}

// Step 3

document.getElementById('option3-2').addEventListener('click', option3)

function option3 () {
  document.getElementById('button-set3').style.display = 'none'
  document.getElementById('button-set4').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background4.svg')"
}

// Step 4

document.getElementById('option4-1').addEventListener('click', option4)

function option4 () {
  document.getElementById('button-set4').style.display = 'none'
  document.getElementById('button-set5').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background5.svg')"
}

// Step 5

document.getElementById('option5-3').addEventListener('click', option5)

function option5 () {
  document.getElementById('button-set5').style.display = 'none'
  document.getElementById('button-set6').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background6.svg')"
}

// Step 6

document.getElementById('option6-2').addEventListener('click', option6)

function option6 () {
  document.getElementById('button-set6').style.display = 'none'
  document.getElementById('button-set7').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background7.svg')"
}

// Step 7

document.getElementById('option7-3').addEventListener('click', option7)

function option7 () {
  document.getElementById('button-set7').style.display = 'none'
  document.getElementById('last-input').style.display = 'block'
  document.body.style.backgroundImage = "url('./backgrounds/Final Stage/Final Stage Background8.svg')"
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
