const form = document.querySelector("form");
const body = document.body;
const username = document.querySelector("input[name='username']");
const password = document.querySelector("input[name='password']");

const CURSOR_SIZE = 32;
const BUTTON_WIDTH = 250;
const BUTTON_HEIGHT = 36;

const widthLimit = body.clientWidth - BUTTON_WIDTH;
const heightLimit = body.clientHeight - BUTTON_HEIGHT;
const initialBtnPosition = form.offsetTop + form.offsetHeight + 15;

const currentBtnPosition = { left: 0, top: 0 };
const outerBtnBorder = { left: 0, top: 0, bottom: 0, right: 0 };

const btn = document.createElement("button");
btn.textContent = "Submit";
btn.style.top = `${initialBtnPosition}px`;
btn.setAttribute("class", "form-control");
body.appendChild(btn);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Congrats on finally clicking the button!");
});

const generateBtnPosition = () => {
  const left = Math.round(Math.random() * widthLimit);
  const top = Math.round(Math.random() * heightLimit);
  return { left, top };
};

document.addEventListener("mousemove", (e) => {
  currentBtnPosition.left = btn.offsetLeft;
  currentBtnPosition.top = btn.offsetTop;

  outerBtnBorder.left = currentBtnPosition.left - CURSOR_SIZE;
  outerBtnBorder.top = currentBtnPosition.top - CURSOR_SIZE;
  outerBtnBorder.bottom =
    currentBtnPosition.top + btn.offsetHeight + CURSOR_SIZE;
  outerBtnBorder.right =
    currentBtnPosition.left + btn.offsetWidth + CURSOR_SIZE;

  const isMouseInOuterBtnBorder =
    e.clientX >= outerBtnBorder.left &&
    e.clientX <= outerBtnBorder.right &&
    e.clientY >= outerBtnBorder.top &&
    e.clientY <= outerBtnBorder.bottom;

  if (isMouseInOuterBtnBorder) {
    const randomPosition = generateBtnPosition();
    btn.style.top = `${randomPosition.top}px`;
    btn.style.left = `${randomPosition.left}px`;
  }
});
