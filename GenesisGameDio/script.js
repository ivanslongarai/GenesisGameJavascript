let order = [];
let clickedOrder = [];
let score = 0;

let green = document.querySelector(".green");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let blue = document.querySelector(".blue");

// Create a random order
let shufleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];
  for (let itemIndex in order) {
    let elementColor = createColorElement(order[itemIndex]);
    lightColor(elementColor, Number(itemIndex) + 1);
  }
};

// Switch on the next color
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, number - 250);
  setTimeout(() => {
    element.classList.remove("selected");
  });
};

// It checks it the player have got the correct order
let checkOrder = () => {
  for (let itemIndex in clickedOrder) {
    if (clickedOrder[itemIndex] != order[itemIndex]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Points:  ${score}\nYou got it! Starting the next level!!`);
    nextLevel();
  }
};

// Set user click
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add("selected");
  setTimeout(() => {
    createColorElement(color).classList.remove("selected");
    checkOrder();
  }, 250);
};

// get color
let createColorElement = (color) => {
  switch (color) {
    case 0:
      return green;
    case 1:
      return red;
    case 2:
      return yellow;
    case 3:
      return blue;
  }
};

// It goes for the next level
let nextLevel = () => {
  score++;
  shufleOrder();
};

// Game over
let gameOver = () => {
  alert(`Points: ${score}!\nGAME OVER!!!\n\nClick to start a new game!!`);
  order = [];
  clickedOrder = [];
  playGame();
};

// Start a game
let playGame = () => {
  alert("Welcome to Genesis Game!\n\n Starting a new Game!!!");
  score = 0;
  nextLevel();
};

// click events for the colors
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
