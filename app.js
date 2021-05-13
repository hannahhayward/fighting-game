let happiness = 50
let Name = "Roger"
let Actions = 0
let depressionInterval = 0

function start() {
  startInterval()
  let gameStart = document.getElementById("show")
  gameStart.classList.remove("hidden")
}
// debugger
function pet() {
  happiness += 10
  Actions += 1
  // alert(happiness + " You pet the bun")
  update()
}

function feed() {
  happiness += 20
  Actions += 1
  update()
}

function water() {
  happiness += 2
  Actions += 1

  update()
}
function clean() {
  happiness += 2
  Actions += 1

  update()
}
function deadBun() {
  let death = document.getElementById("bunbun")
  clearInterval(depressionInterval)
  let gameEnd = document.getElementById("show")
  gameEnd.classList.add("hidden")
  death.innerHTML = `
  <h1 class="text-center"> 
  You killed the bun bun... </h1>
  <img class="bunny-picture" src="https://www.christart.com/images/clipart/1863/dead-easter-bunny.png"
  alt="dead-bun">`

}
function happyBun() {
  let joy = document.getElementById("bunbun")
  clearInterval(depressionInterval)
  let gameEnd = document.getElementById("show")
  gameEnd.classList.add("hidden")
  joy.innerHTML = `
  <h1 class="text-center"> 
  You did good </h1>
  <img class="bunny-picture" src="https://i.pinimg.com/originals/53/99/2d/53992da9dcae114a4e220827a4e81e88.jpg"
  alt="happy-bun">`

}
function kill() {
  happiness = 0
  clearInterval(depressionInterval)
  let murder = document.getElementById("bunbun")
  let gameEnd = document.getElementById("show")
  gameEnd.classList.add("hidden")
  murder.innerHTML = `
  <h2 class="text-center"> 
  You murder the bun bun... </h2>
  <img class="bunny-picture death-img" src="https://i.pinimg.com/originals/38/5d/ce/385dcea4df2f2293a7c2c2546a1eb2ac.jpg"
  alt="dead-bun">`
}

function update() {
  let status = document.getElementById("Happiness")
  if (happiness <= 0) {
    deadBun()
  }
  if (happiness >= 200) {
    happyBun()
  }

  status.innerHTML = `
    <span class= "p-1">
    Happiness is now at: ${happiness}
  Care provided: ${Actions}
</span> `

}
function depression() {
  happiness -= 1
  updateDepression()
}
function updateDepression() {
  let status = document.getElementById("Happiness")
  if (happiness <= 0) {
    deadBun()
  }
  if (happiness >= 200) {
    happyBun()
  }
  status.innerHTML = `
  <span>
  Happiness is now at: ${happiness}
  Care provided: ${Actions}
  </span> `
}
function startInterval() {
  depressionInterval = setInterval(depression, 1000)
}
