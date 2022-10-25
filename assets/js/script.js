// TODO: Declare any global variables we need
let flipResult;
let percHeads = 0;
let percTails = 0;
let numHeads = 0;
let numTails = 0;

// DOM elements
let image = document.querySelector("#img");
let headsImg = "./assets/images/penny-heads.jpg";
let tailsImg = "./assets/images/penny-tails.jpg";
let statusMsgDiv = document.querySelector(".message-container");
let percHeadsBox = document.querySelector("#heads-percent");
let percTailsBox = document.querySelector("#tails-percent");
let numHeadsBox = document.querySelector("#heads");
let numTailsBox = document.querySelector("#tails");
let flipBtn = document.querySelector("#flip");
let clearBtn = document.querySelector("#clear");

// flip button
flipBtn.addEventListener("click", () => {
  let flip = Math.random();

  if (flip < 0.5) {
    image.src = tailsImg;
    statusMsgDiv.textContent = "You Flipped Tails!";
    numTails += 1;
    numTailsBox.textContent = numTails;
  } else if (flip >= 0.5) {
    image.src = headsImg;
    statusMsgDiv.textContent = "You Flipped Heads!";
    numHeads += 1;
    numHeadsBox.textContent = numHeads;
  }

  flipResult = numHeads + numTails;
  if (flipResult > 0) {
    percTails = Math.round((numTails / flipResult) * 100);
    percHeads = Math.round((numHeads / flipResult) * 100);
    percTailsBox.textContent = percTails + "%";
    percHeadsBox.textContent = percHeads + "%";
  }
});

// clear button
clearBtn.addEventListener("click", function () {
  statusMsgDiv.textContent = "Lets Get Rolling!";
  numTails = 0;
  numHeads = 0;
  numTailsBox.textContent = numTails;
  numHeadsBox.textContent = numHeads;
  percTailsBox.textContent = 0 + "%";
  percHeadsBox.textContent = 0 + "%";
});
