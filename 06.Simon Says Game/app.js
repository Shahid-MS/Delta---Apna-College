let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "yellow", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
//Start game
document.addEventListener("keypress", function () {
  if (started == false) {
    // console.log("game started");
    started = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  //   console.log(randIdx);
  //   console.log(randColor);
  //   console.log(randBtn);
  gameSeq.push(randColor);
  //   console.log(gameSeq);
  btnFlash(randBtn);
}
//flash
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function btnPress() {
  if (started == false) {
    return;
  }
  //   console.log(this);
  let btn = this;
  btnFlash(btn);

  userColor = btn.getAttribute("id");
  //   console.log(userColor);
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

let checkAns = function (idx) {
  //   console.log(level);
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your Score is <b> ${
      level - 1
    } </b> <br> Press any key to Start`;
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(() => {
      body.style.backgroundColor = "white";
    }, 150);
    reset();
  }
};

let reset = function () {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
};
