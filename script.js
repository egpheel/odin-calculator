const clearButton = document.querySelector(".calc-clear-button");
const calcButtons = document.querySelectorAll(".calc-button");
const display = document.querySelector(".display");

let operator = "";
let displayValue = "";
let resolved = false;

calcButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleButtons(e.target.textContent);
  });
});

clearButton.addEventListener("click", () => {
  clearDisplay();
});

const handleButtons = (buttonText) => {
  switch (buttonText) {
    case "+":
      if (!operator) {
        displayValue += " + ";
        operator = "+";
        resolved = false;
      }
      break;
    case "-":
      if (!operator) {
        displayValue += " - ";
        operator = "-";
        resolved = false;
      }
      break;
    case "*":
      if (!operator) {
        displayValue += " * ";
        operator = "*";
        resolved = false;
      }
      break;
    case "/":
      if (!operator) {
        displayValue += " / ";
        operator = "/";
        resolved = false;
      }
      break;
    case "=":
      if (!resolved && displayValue.split(" ").length === 3) {
        resolveOperation(displayValue);
      }
      break;
    default:
      if (!resolved) {
        displayValue += buttonText;
      }
      break;
  }
  updateDisplay();
};

const resolveOperation = (op) => {
  op = displayValue.split(" ");
  displayValue = operate(op) + "";
  resolved = true;
  operator = "";
  updateDisplay();
};

const clearDisplay = () => {
  displayValue = "0";
  operator = "";

  updateDisplay();
};

const updateDisplay = () => {
  display.textContent = displayValue;
};

const operate = ([a, op, b]) => {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

const add = (a, b) => {
  return parseFloat(a) + parseFloat(b);
};

const subtract = (a, b) => {
  return parseFloat(a) - parseFloat(b);
};

const multiply = (a, b) => {
  return parseFloat(a) * parseFloat(b);
};

const divide = (a, b) => {
  return parseFloat(a) / parseFloat(b);
};
