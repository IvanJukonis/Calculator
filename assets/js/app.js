var operatorA
var operatorB
var operation

window.onload = function init() {

  //Vars
  var display = document.getElementById("display");
  var btnMC = document.getElementById("MC");
  var btnMSum = document.getElementById("M+");
  var btnMSub = document.getElementById("M-");
  var btnDiv = document.getElementById("/");
  var btn7 = document.getElementById("7");
  var btn8 = document.getElementById("8");
  var btn9 = document.getElementById("9");
  var btnMult = document.getElementById("*");
  var btn4 = document.getElementById("4");
  var btn5 = document.getElementById("5");
  var btn6 = document.getElementById("6");
  var btnSub = document.getElementById("-");
  var btn1 = document.getElementById("1");
  var btn2 = document.getElementById("2");
  var btn3 = document.getElementById("3");
  var btnSum = document.getElementById("+");
  var btnC = document.getElementById("C");
  var btn0 = document.getElementById("0");
  var btnPoint = document.getElementById(".");
  var btnEqual = document.getElementById("=");

  //Events
  btn1.onclick = function(e){
    display.textContent = display.textContent + "1";
  }
  btn2.onclick =  function(e){
    display.textContent = display.textContent + "2"
  }
  btn3.onclick =  function(e){
    display.textContent = display.textContent + "3"
  }
  btn4.onclick =  function(e){
    display.textContent = display.textContent + "4"
  }
  btn5.onclick =  function(e){
    display.textContent = display.textContent + "5"
  }
  btn6.onclick =  function(e){
    display.textContent = display.textContent + "6"
  }
  btn7.onclick =  function(e){
    display.textContent = display.textContent + "7"
  }
  btn8.onclick =  function(e){
    display.textContent = display.textContent + "8"
  }
  btn9.onclick =  function(e){
    display.textContent = display.textContent + "9"
  }
  btn0.onclick =  function(e){
    display.textContent = display.textContent + "0"
  }
  btnMC.onclick =  function(e){
    reset();
  }
  btnSum.onclick =  function(e){
    operatorA = display.textContent;
    operation = "+";
    clear();
  }
  btnSub.onclick =  function(e){
    operatorA = display.textContent;
    operation = "-";
    clear();
  }
  btnDiv.onclick =  function(e){
    operatorA = display.textContent;
    operation = "/";
    clear();
  }
  btnMult.onclick =  function(e){
    operatorA = display.textContent;
    operation = "*";
    clear();
  }
  btnEqual.onclick =  function(e){
    operatorB = display.textContent;
    result();
  }
  btnC.onclick =  function(e){
    display.textContent = "";
  }
}

//External Events

function clear(){
  display.textContent = "";
}

function reset(){
  display.textContent = "";
  operatorA = 0;
  operatorB = 0;
  operation = "";
}

function result(){
  var res = 0;
    switch (operation) {
        case "+": res = parseFloat(operatorA) + parseFloat(operatorB);
            break;
        case "-": res = parseFloat(operatorA) - parseFloat(operatorB);
            break;
        case "*": res = parseFloat(operatorA) * parseFloat(operatorB);
            break;
        case "/": res = parseFloat(operatorA) / parseFloat(operatorB);
            break;
        default: res = operatorB;
            break;
    }
    reset();
    display.textContent = res;
}
