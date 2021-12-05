let order = [];
let clickedOrder = [];
let score = 0;

// 0 - green
// 1 - red
// 2 - yellow
// 3 - blue

const green = document.querySelector('.__green');
const red = document.querySelector('.__red');
const yellow = document.querySelector('.__yellow');
const blue = document.querySelector('.__blue');

const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

const lightColor = (element, time) => {
  time = time * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, time - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  });
};

const checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Score: ${score}\nYou're right 🎉 The next level is about to start!`);
    nextLevel();
  }
};

const click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
};

// function return color
const createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
};

// function next level:
const nextLevel = () => {
  score++;
  shuffleOrder();
};

// function game over:
const gameOver = () => {
  alert(`Score: ${score}\nYou lost 👎\nConfirm to restart the game...`);
  order = [];
  clickedOrder = [];

  playGame();
};

const playGame = () => {
  alert(`👋 Welcome to Genius. Start new game?`);
  score = [];

  nextLevel();
};

green.onclick = () => {
  click(0);
};

red.onclick = () => {
  click(1);
};

yellow.onclick = () => {
  click(2);
};

blue.onclick = () => {
  click(3);
};

playGame();
