let contener = document.getElementById("contaner");
let screen = document.getElementById("display");

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
}
function add(value) {
  screen.textContent += value;
}
function del() {
  let current = screen.textContent;
  screen.textContent = current.substring(0, current.length - 1);
}
function calc() {
  try {
    let calculation = eval(screen.textContent);
    screen.textContent = calculation;
  } catch (error) {
    screen.textContent = `math error`;
  }
}
