const validationInput = document.getElementById("validation-input");

function checkInputValidity() {
  const expectedLength = parseInt(validationInput.dataset.length);
  const enteredValue = validationInput.value.trim();
  const isValid = enteredValue.length === expectedLength;

  validationInput.classList.remove("valid", "invalid");
  validationInput.classList.add(isValid ? "valid" : "invalid");
}

validationInput.addEventListener("blur", checkInputValidity);