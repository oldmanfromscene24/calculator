let number = null;
let operator = null;
let lastPress = null;
const display = document.getElementById("display");
// let displayValue = "";
listener();

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}
function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}
function divide(a, b) {
  if (b == 0) {
    clear();
    return "Divide by Zero";
  }
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

function addValues(value) {
  if (lastPress === "numbers") display.textContent += value;
  else display.textContent = value;
}

function addOperator(addedOperator) {
  if (display.textContent !== "" && display.textContent!== "Divide by Zero") {
    if (number === null) {
      number = display.textContent;
      display.textContent = addedOperator;
    } else {
      display.textContent = operate(number, display.textContent, operator);
      number = display.textContent;
    }
    operator = addedOperator;
  }
}

function equals() {
  if (number !== null && lastPress === "numbers") {
    display.textContent = operate(number, display.textContent, operator);
    number = null;
  }
}

function clear() {
  number = null;
  display.textContent = "";
  lastPress = null;
}

function getValues(e) {
  switch (e.target.className) {
    case "numbers":
      addValues(e.target.textContent);
      break;
    case "operators":
      addOperator(e.target.textContent);
      break;
    case "equals":
      equals();
      break;
    case "clear":
      clear();
  }
  lastPress = e.target.className;
}

function listener() {
  const buttons = document.getElementById("buttons");
  buttons.addEventListener("click", getValues);
}
