const clearButton = document.querySelector(".calc-clear-button");
const calcButtons = document.querySelectorAll(".calc-button");
const display = document.querySelector(".display");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayValue = "";

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
        if (displayValue === "") {
          displayValue = 0 + " + ";
        } else {
          displayValue += " + ";
        }
        operator = "+";
      }
      break;
    case "-":
      if (!operator) {
        if (displayValue === "") {
          displayValue = 0 + " - ";
        } else {
          displayValue += " - ";
        }
        operator = "-";
      }
      break;
    case "*":
      if (!operator) {
        if (displayValue === "") {
          displayValue = 0 + " * ";
        } else {
          displayValue += " * ";
        }
        operator = "*";
      }
      break;
    case "/":
      if (!operator) {
        if (displayValue === "") {
          displayValue = 0 + " / ";
        } else {
          displayValue += " / ";
        }
        operator = "/";
      }
      break;
    default:
      displayValue += buttonText;
      break;
  }
  updateDisplay();
};

const clearDisplay = () => {
  displayValue = "";
  firstNumber = 0;
  secondNumber = 0;
  operator = "";

  updateDisplay();
};

const updateDisplay = () => {
  display.textContent = displayValue;
};

const operate = (a, b, op) => {
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
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};
