const clearButton = document.querySelector(".calc-clear-button");
const calcButtons = document.querySelectorAll(".calc-button");
const display = document.querySelector(".display");

let readyForOperator = true;
let displayValue = "0";
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
      operatorButtonPressed("+");
      break;
    case "-":
      operatorButtonPressed("-");
      break;
    case "*":
      operatorButtonPressed("*");
      break;
    case "/":
      operatorButtonPressed("/");
      break;
    case "=":
      if (!resolved && displayValue.split(" ").length === 3) {
        resolveOperation(displayValue);
        resolved = true;
      }

      if (displayValue === "") {
        displayValue = "0";
      }
      break;
    default:
      if (!resolved) {
        if (displayValue === "0") {
          displayValue = "";
        }

        displayValue += buttonText;
      }
      break;
  }
  updateDisplay();
};

const isThereASecondNumber = (op) => {
  return op.split(" ")[2] ? true : false;
};

const operatorButtonPressed = (op) => {
  if (isThereASecondNumber(displayValue)) {
    resolveOperation(displayValue);
  }

  if (readyForOperator) {
    if (displayValue === "0") {
      displayValue = "0 " + op + " ";
    } else {
      displayValue += " " + op + " ";
    }
    resolved = false;
    readyForOperator = false;
  }
};

const resolveOperation = (op) => {
  op = displayValue.split(" ");
  displayValue = operate(op) + "";
  readyForOperator = true;
  updateDisplay();
};

const clearDisplay = () => {
  displayValue = "0";
  resolved = false;
  readyForOperator = true;

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
  return Math.round((parseFloat(a) + parseFloat(b)) * 10000) / 10000;
};

const subtract = (a, b) => {
  return Math.round((parseFloat(a) - parseFloat(b)) * 10000) / 10000;
};

const multiply = (a, b) => {
  return Math.round(parseFloat(a) * parseFloat(b) * 10000) / 10000;
};

const divide = (a, b) => {
  if (b === "0") {
    return "CAN'T DIVIDE BY ZERO!";
  }
  return Math.round((parseFloat(a) / parseFloat(b)) * 10000) / 10000;
};
