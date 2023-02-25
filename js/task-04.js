let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action = "decrement"]');
const buttonIncrement = document.querySelector('button[data-action = "increment"]');
const currentValue = document.querySelector("#value");

buttonDecrement.addEventListener('click', onButtonDecrementClick);
buttonIncrement.addEventListener('click', onButtonIncrementClick)

function onButtonDecrementClick(event) {
   counterValue -= 1
   return currentValue.textContent = counterValue;
}
function onButtonIncrementClick(event) {
    counterValue += 1
    return currentValue.textContent = counterValue;
}
