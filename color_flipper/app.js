const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between 0 - 3 based on our colors array
  const randomNumber = getRandom();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandom() {
  // generating random numbers based on size of colors array
  return Math.floor(Math.random() * colors.length);
}
