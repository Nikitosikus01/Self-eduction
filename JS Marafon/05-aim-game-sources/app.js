

const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const screen3 = document.querySelector('#screen3');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = [
   "rgb(255, 255, 255)",
   "rgb(255, 255, 0)",
   "rgb(255, 0, 255)",
   "rgb(0, 255, 255)",
   "rgb(0, 255, 0)",
   "rgb(0, 0, 255)",
   "rgb(255, 0, 0)",
   "rgb(0, 0, 0)",
 ];
let time = 0;
let counter = 0;

startBtn.addEventListener('click', (event) => {
   event.preventDefault()
   screens[0].classList.add('up')
});

timeList.addEventListener('click', event => {

   if (event.target.classList.contains('time-btn')) {
      time = parseInt(event.target.getAttribute('data-time'))
      screens[1].classList.add('up');
      startGame()
   }

});

board.addEventListener('click', event => {
   if (event.target.classList.contains('circle')) {
      counter++
      event.target.remove()
      createRandomCircle()
   }
})


function startGame() {
   createRandomCircle()
   setInterval(decreaseTime, 1000)
   setTime(time)
}

function decreaseTime() {
   if (time === 0) {
      let isResizeble = false
      if(isResizeble == false){
         finishGame()
         isResizeble = true
      }
      
   } else {
      let curent = --time
      if (curent < 5) {
         curent = `0${curent}`
      }
      setTime(curent)
   }
}

function setTime(value) {
   timeEl.innerHTML = `00:${value}`
}


function finishGame() {
   timeEl.parentNode.classList.add('hide')
   board.innerHTML = `<h1>Конец!<br>Счёт: <span class="primary">${counter}</span></h1>`
}

function createRandomCircle() {
   const circle = document.createElement('div');
   const size = getRandomNamber(10, 60)
   const { width, height } = board.getBoundingClientRect()
   const x = getRandomNamber(0, width - size)
   const y = getRandomNamber(0, height - size)
   const color = getRendomColor()
   circle.style.background = color;
   circle.classList.add('circle')
   circle.style.width = `${size}px`
   circle.style.height = `${size}px`
   circle.style.top = `${y}px`
   circle.style.left = `${x}px`

   board.append(circle)
}


function getRandomNamber(min, max) {
   return Math.round(Math.random() * (max - min) + min)
}


function getRendomColor() {
   const index = Math.floor(Math.random() * colors.length);
   return colors[index]
}

