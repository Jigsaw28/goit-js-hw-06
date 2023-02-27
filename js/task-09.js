function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');



btnChangeColor.addEventListener('click', (event) => {
  let getColor = getRandomHexColor();
  body.style.backgroundColor = getColor;
  spanColor.textContent = getColor;
})