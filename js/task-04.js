const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.getElementById("value");

let counterValue = 0;

function updateCounterValue(value) {
  counterValue += value;
  counterValueSpan.textContent = counterValue;
}

decrementButton.addEventListener("click", function() {
  updateCounterValue(-1);
});

incrementButton.addEventListener("click", function() {
  updateCounterValue(1);
});