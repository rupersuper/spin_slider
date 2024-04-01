const spinLine = document.querySelector(".spin-line");
const max = 10;

let timeOut;
let count = 2;
let state = false;

document.querySelector("button").onclick = function () {
  state = !state;
  rotateSpin();
};

function rotateSpin() {
  if (state) {
    timeOut = setTimeout(freeSpin, 300);
  } else {
    clearTimeout(timeOut);
  }
}

function freeSpin() {
  state = true;
  const div = document.createElement("div");

  if (count + 1 < max) count++;
  else count = 0;

  div.textContent = count;
  spinLine.append(div);
  removeElement(document.querySelector(".spin-line>div:first-child"));
}

function removeElement(element) {
  element.classList.add("animation-remove");
  setTimeout(function () {
    element.remove();
    rotateSpin();
  }, 300);
}
