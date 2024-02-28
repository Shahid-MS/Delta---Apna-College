alert("Welcome");
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let box = document.querySelector("#box");

btn.addEventListener("click", function generateRandomColor() {
  let color = getRandomColor();
  h1.innerText = color;
  box.innerHTML = "This is new color";
  box.style.backgroundColor = color;
});

let getRandomColor = function generateRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red} , ${green}, ${blue})`;
  return color;
};
