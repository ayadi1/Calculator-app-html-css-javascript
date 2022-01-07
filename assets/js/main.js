// theme Switcher start
const stylesheet = document.getElementById("stylesheet");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const themeSwitch = (e) =>
  (stylesheet.href = `./assets/css/Theme-${e.target.value}-vars.css`);
opt1.addEventListener("change", themeSwitch);
opt2.addEventListener("change", themeSwitch);
opt3.addEventListener("change", themeSwitch);
// theme Switcher end
// calc function
const screen = document.getElementById("screen");

let value_1 = "";
let value_2 = "";
let output = "0";
let calcFunc = "";
let inValue_1 = true;
let isNewValue = true;
const add = (a, b) => +a + +b;
const minus = (a, b) => +a - +b;
const multi = (a, b) => +a * +b;
const div = (a, b) => +a / +b;

const showInScreen = (a, b, fun) => {
  screen.innerText = fun(a, b).toFixed(9);
  isNewValue = true;
  inValue_1 = true;
  value_1 = "";
  value_2 = "";
  calcFunc = "";
};

const clearScreen = () => {
  screen.innerText = "";
  inValue_1 = true;
  value_1 = "";
  value_2 = "";
  calcFunc = "";
};
const clearScreenWithResult = () => {
  inValue_1 = true;
  value_1 = "";
  value_2 = "";
  calcFunc = "";
};

document.getElementById("numbers").addEventListener("click", (e) => {
  switch (e.target.textContent) {
    case "DEL":
      clearScreen();
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ".":
      if (isNewValue) {
        screen.innerText = "";
        isNewValue = false;
      }
      if (inValue_1) {
        value_1 += e.target.textContent;
        screen.innerText += e.target.textContent;
      } else {
        value_2 += e.target.textContent;
        screen.innerText += e.target.textContent;
      }
      break;
    case "+":
    case "-":
    case "x":
    case "/":
      if (inValue_1 && (value_1 || value_2)) {
        inValue_1 = false;
        calcFunc = e.target.textContent;
        screen.innerText = "";
      }
  }
  document.getElementById("result").addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "=":
        if ((value_1, value_2, calcFunc)) {
          isNewValue = true;
          switch (calcFunc) {
            case "+":
              showInScreen(value_1, value_2, add);
              break;
            case "-":
              showInScreen(value_1, value_2, minus);
              break;
            case "x":
              showInScreen(value_1, value_2, multi);
              break;
            case "/":
              showInScreen(value_1, value_2, div);
              break;
            default:
              break;
          }
        }
        break;
      case "RESET":
        clearScreen();
      default:
        break;
    }
  });
});
// click effect
document.querySelectorAll(".grid-item").forEach((element) => {
  element.addEventListener("click", function () {
    this.style.top = "5px";
    setTimeout(() => {
      this.style.top = "0px";
    }, 100);
  });
});
