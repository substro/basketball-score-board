let homeScore = document.getElementById("home-counter")
let guestScore = document.getElementById("guest-counter")

let scoreBtn1 = document.getElementById("hb1")
let scoreBtn2 = document.getElementById("hb2")
let scoreBtn3 = document.getElementById("hb3")

let guestBtn1 = document.getElementById("gb1")
let guestBtn2 = document.getElementById("gb2")
let guestBtn3 = document.getElementById("gb3")

scoreBtn1.addEventListener("click", homeAdd1)
scoreBtn2.addEventListener("click", homeAdd2)
scoreBtn3.addEventListener("click", homeAdd3)

guestBtn1.addEventListener("click", guestAdd1)
guestBtn2.addEventListener("click", guestAdd2)
guestBtn3.addEventListener("click", guestAdd3)

let score1 = 0
let score2 = 0

function homeAdd1() {
  score1 += 1
  homeScore.textContent = score1
  console.log(score1)
}
function homeAdd2() {
  score1 += 2
  homeScore.textContent = score1
  console.log(score1)
}
function homeAdd3() {
  score1 += 3
  homeScore.textContent = score1
}

function guestAdd1() {
  score2 += 1
  guestScore.textContent = score2
}
function guestAdd2() {
  score2 += 2
  guestScore.textContent = score2
}
function guestAdd3() {
  score2 += 3
  guestScore.textContent = score2
}
