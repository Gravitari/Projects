const btnsdiv = document.getElementById("calc-buttons")
let btns = {
  plus:"<button id='plus-btn' class='btn'>+</button>",
  minus:"<button id='minus-btn' class='btn' >-</button>",
  mult:"<button id='mult-btn' class='btn'>x</button>",
  division:"<button id='division-btn' class='btn'>/</button>",
  seven:"<button id='seven-btn' class='btn'>7</button>",
  eight:"<button id='eight-btn' class='btn'>8</button>",
  nine:"<button id='nine-btn' class='btn'>9</button>",
  del:"<button id='del-btn' class='btn'>DEL</button>",
  four:"<button id='four-btn' class='btn'>4</button>",
  five:"<button id='five-btn' class='btn'>5</button>",
  six:"<button id='six-btn' class='btn'>6</button>",
  equals:"<button class='btn' id='equals-btn'>=</button>",
  one:"<button id='one-btn' class='btn'>1</button>",
  two:"<button id='two-btn' class='btn'>2</button>",
  three:"<button id='three-btn' class='btn'>3</button>",
  zero:"<button id='zero-btn' class='btn'>0</button>",
  dot:"<button id='dot-btn' class='btn'>.</button>",
  Clear:"<button id='clear-btn' class='btn'>C</button>"
}
// resume to css grid-areas

for(const key in btns){
  btnsdiv.innerHTML += btns[`${key}`]
}

// if "0" inner text = event
//else +=
  