
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const body = document.querySelector("body");

function randomColor() {
  const hex = "123456789ABCDEFG";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId;

const changeBg = function () {
  body.style.backgroundColor = randomColor();
};

start.addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(changeBg, 1000);
  }
});

stop.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  body.style.backgroundColor = "#212121"; 
});

