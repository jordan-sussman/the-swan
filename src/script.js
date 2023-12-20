document.title = 108
const input = document.querySelector('input')

const siren = new Audio('assets/siren.mp3')
const type = new Audio('assets/type.mp3')
const reset = new Audio('assets/reset.mp3')
const tick = new Audio('assets/tick.mp3')

const typeSound = () => {
  let randomNumber = Math.floor(Math.random() * 7)
  switch (randomNumber) {
    case 0:
      new Audio('assets/typing_sounds/button1.mp3').play()
      break
    case 1:
      new Audio('assets/typing_sounds/button2.mp3').play()
      break
    case 2:
      new Audio('assets/typing_sounds/button3.mp3').play()
      break
    case 3:
      new Audio('assets/typing_sounds/button4.mp3').play()
      break
    case 4:
      new Audio('assets/typing_sounds/button5.mp3').play()
      break
    case 5:
      new Audio('assets/typing_sounds/button6.mp3').play()
      break
    case 6:
      new Audio('assets/typing_sounds/button7.mp3').play()
      break
    case 7:
      new Audio('assets/typing_sounds/button8.mp3').play()
  }
}

input.onkeydown = (event) => {
  typeSound()
  if (event.key == 'Enter') {
    input.value.trim()
    if (input.value == '4 8 15 16 23 42') {
      document.title = 108
      input.value = ''
      siren.pause()
      siren.currentTime = 0
      reset.play()
    } 
    else (input.value == 'terminate') {
      document.title = 4
      input.value = ''
      siren.play()
  }
}

setInterval(() => {
  document.title--
  if (document.title <= 4) {
    siren.play()
  }
  tick.play()
}, 60000)

setInterval(() => {
  input.focus()
}, 1)
