function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector('#boxes');
const btnDestroy = document.querySelector('button[data-create');
const btnCreate = document.querySelector('button[data-create');
const input = document.querySelector('input');




function createBoxes(amount) {
  const createBox = document.createElement('div');
  const currentBoxes = createBox * amount;
  return box.prepend(createBox)
}
 console.log(createBoxes(4))