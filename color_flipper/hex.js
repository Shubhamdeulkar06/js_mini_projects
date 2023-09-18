const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between the length based on our hex array

  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandom()];
  }
  //   const randomNumber = getRandom();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
  console.log(randomNumber);
});

function getRandom() {
  // generating random numbers based on  hex array
  return Math.floor(Math.random() * hex.length);
}
