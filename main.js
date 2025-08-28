let contener = document.getElementById("contaner");
let screen = document.getElementById("display");
let justCalculated = false;

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
  justCalculated = false;
}
function add(value) {
  if (screen.textContent === "math error") {
    screen.textContent = value;
    justCalculated = false;
    return;//to stop here
  }
  if (justCalculated) {
    if (!isNaN(value) || value === ".") {
      screen.textContent = value;
    } else {
      screen.textContent += value;
    }
    justCalculated = false;
  } else {
    screen.textContent += value;
  }
}
function del() {
  let current = screen.textContent;
  screen.textContent = current.substring(0, current.length - 1);
  justCalculated = false;
}
function calc() {
  try {
    let calculation = eval(screen.textContent);
    screen.textContent = calculation;
    justCalculated = true;
  } catch (error) {
    screen.textContent = `math error`;
    justCalculated = false;
  }
}
