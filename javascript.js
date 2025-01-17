let number = null;
let operator = null;
let lastPress = null;
const display = document.getElementById("display");
listener();

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b == 0) {
    clear();
    return "Divide by Zero";
  }
  return a / b;
}

function operate(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);
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
  if (display.textContent.indexOf(".") !== -1 && value == ".") return;
  if (lastPress === "numbers") display.textContent += value;
  else if (value == ".") display.textContent = "0.";
  else display.textContent = value;
  lastPress = "numbers";
}

function addOperator(addedOperator) {
  if (
    display.textContent !== "" &&
    display.textContent !== "Divide by Zero" &&
    lastPress !== "operators"
  ) {
    if (number === null) {
      number = display.textContent;
    } else {
      display.textContent = operate(number, display.textContent, operator);
      number = display.textContent;
    }
    operator = addedOperator;
  }
  lastPress = "operators";
}

function back() {
  if (lastPress === "numbers" || lastPress === "back") {
    lastPress = "back";
    if (display.textContent === "0.") display.textContent = "";
    else display.textContent = display.textContent.slice(0, -1);
  }
}

function clear() {
  operator = null;
  number = null;
  display.textContent = "";
  lastPress = null;
}

function equals() {
  if (number !== null && lastPress === "numbers" && operator != null) {
    display.textContent = operate(number, display.textContent, operator);
    number = null;
    operator = null;
    lastPress = null;
  }
}

function getValues(e) {
  let type = null;
  let text = null;
  if (e.type === "click") {
    type = e.target.className;
    text = e.target.textContent;
  } else if (e.type === "keyup") {
    if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
      type = "numbers";
      text = e.key;
    } else if (["+", "-", "*", "/"].includes(e.key)) {
      type = "operators";
      text = e.key;
    } else if (e.key === "Backspace") type = "back";
    else if (e.key === "Delete") type = "clear";
    else if (e.key === "Enter") type = "equals";
  }
  switch (type) {
    case "numbers":
      addValues(text);
      break;
    case "operators":
      addOperator(text);
      break;
    case "back":
      back();
      break;
    case "clear":
      clear();
      break;
    case "equals":
      equals();
  }
}

function listener() {
  const buttons = document.getElementById("buttons");
  buttons.addEventListener("click", getValues);
  window.addEventListener("keyup", getValues);
}
