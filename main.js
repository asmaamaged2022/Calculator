let contener = document.getElementById("contaner");
let screen = document.getElementById("display");
let justCalculated = true;
const operators = ["+", "*", "/"];
let op = ["+", "*", "/", "-"];

contener.addEventListener("click", function (e) {
  if (e.target.nodeName == "BUTTON") {
    switch (e.target.textContent) {
      case "CE":
        clear();
        break;
      case "DEL":
        del();
        break;
      case "=":
        calc();
        break;
      default:
        add(e.target.textContent);
    }
  }
});
function clear() {
  screen.textContent = "";
  justCalculated = true;
}
function add(value) {
  if (screen.textContent === "math error") {
    screen.textContent = value;
    justCalculated = false;
    return; //to stop here
  }

  if (justCalculated) {
    if (!isNaN(value) || value === "." || value === "-") {
      screen.textContent = value;
    } else if (screen.textContent.trim() === "" && operators.includes(value)) {
      return;
    }
    justCalculated = false;
  } else if (op.includes(value) && op.includes(screen.textContent.slice(-1))) {
    return;
  } else {
    screen.textContent += value;
  }
}

function del() {
  let current = screen.textContent;
  screen.textContent = current.substring(0, current.length - 1);
  if (screen.textContent.length === 0) {
    justCalculated = true;
  }
}
function calc() {
  try {
    let calculation = eval(screen.textContent);
    screen.textContent = calculation;
    justCalculated = true;
  } catch (error) {
    screen.textContent = `math error`;
    justCalculated = true;
  }
}
document.addEventListener("keydown", function (e) {
  if (!isNaN(e.key) || ["+", "-", "*", "/", "."].includes(e.key)) {
    add(e.key);
  }
  if (e.key === "Escape") {
    clear();
  }
  if (e.key === "Backspace") {
    del();
  }

  if (e.key === "Enter") {
    calc();
  }
});
