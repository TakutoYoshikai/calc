
let number = 0;

let left = 0;
let calcType = "";

function display() {
  document.getElementById("display").innerText = number.toString();
}
function n(num) {
  number = number * 10 + num;
  display();
}


function plus() {
  calcType = "+";
  left = number;
  number = 0;
}
function minus() {
  calcType = "-";
  left = number;
  number = 0;
}
function multi() {
  calcType = "*";
  left = number;
  number = 0;
}
function div() {
  calcType = "/";
  left = number;
  number = 0;
}

function calc() {
  if (calcType === "+") {
    number = left + number;
  }
  if (calcType === "-") {
    number = left - number;
  }
  if (calcType === "*") {
    number = left * number;
  }
  if (calcType === "/") {
    number = left / number;
  }
  display();
}

function c() {
  left = 0;
  number = 0;
  display();
}

