function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) / parseInt(b);
}
function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}
function divide(a, b) {
  if (b == 0) return "Divide by Zero";
  return parseInt(a) / parseInt(b);
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

function getValues(e) {
  const display = document.getElementById("display");
  display.className += e.target.id
  console.log(display.className);
}

function displayValues() {
  const buttons = document.getElementById("buttons");
  buttons.addEventListener("click", getValues);
}
