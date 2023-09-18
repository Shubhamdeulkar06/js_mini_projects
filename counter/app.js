let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.classList);
    const styels = e.currentTarget.classList;
    if (styels.contains("decrease")) {
      count--;
      value.style.color = "red";
    } else if (styels.contains("increase")) {
      count++;
      value.style.color = "green";
    } else {
      count = 0;
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
