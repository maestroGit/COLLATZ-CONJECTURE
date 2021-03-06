/*
The Collatz conjecture in mathematics asks 
whether repeating two simple arithmetic operations 
will eventually transform every positive integer into one. 
It concerns sequences of integers in which each term
 is obtained from the previous term as follows: 
 if the previous term is even, 
 the next term is one half of the previous term. 
 If the previous term is odd, 
 the next term is 3 times the previous term plus 1. 
 The conjecture is that these sequences always reach 1, 
 no matter which positive integer is chosen to start the sequence.
*/

// Diferentes formas de obtener el ancho en pixels
let width = window.innerWidth;
console.log("screen view: ", screen.width);
let widthClientInner = window.innerWidth;
console.log("innerWidth: ", widthClientInner);
let widthClientOuter = window.outerWidth;
console.log("outerWidth: ", widthClientOuter);

// Dom elements
const canvasdiv = document.getElementById("canvas");
const canvas = document.getElementById("root");
canvas.setAttribute("width", widthClientInner);
const container = document.getElementById("container");
const number = document.getElementById("number");
const btn = document.getElementById("btn");
const results = document.getElementsByClassName("results");
//console.log(`Default value: ${number.defaultValue}`);

// Variables
let count = 0;
let num;
let steep = 1;
let label;
const alleven = [];
const allodd = [];
let evenRound;
//console.time(label);

// get input number
const getnumber = () => {
  count++;
  alleven.length = 0;
  allodd.length = 0;
  canvas.innerHTML = "";
  container.innerHTML = "";
  onediv.innerHTML = "";
  results[0].innerHTML = "";
  let inputValue = document.getElementById("number").value;
  if (inputValue != 0) {
    console.log(`Numero : ${inputValue}`);
    num = inputValue;
    do {
      //console.log(num+" :en do")
      num = collatz(num);
      setTimeout(console.log(num), 1000);
      //console.log(num);
      let collatzNUm = document.createElement("div");
      collatzNUm.innerText = num + "-";
      results[0].append(collatzNUm);
      steep++;
      //console.log(`steep:${steep}`);
    } while (num != 1);
    if (num == 1) {
      console.log("finished=1");
      let arr = [1];
      drawOneDiv(arr);
      const totalnum = alleven.length + allodd.length;
      console.log("even:" + alleven.length);
      console.log("total numeros:" + totalnum);
      const averagEven = (alleven.length / totalnum) * 100;
      let evenRound;
      evenRound = Math.round(averagEven);
      console.log("% of even:" + evenRound);
      const arraynum = alleven.concat(allodd);
      drawDiv(arraynum);
      //console.timeEnd(label);
      console.log("total barra:" + widthClientInner);
      let barmesure = (widthClientInner / 100) * evenRound;
      console.log("% of even=" + barmesure);
      drawBar(barmesure);
    }
  } else {
    alert("Please, enter a number > 0");
  }
};

// Events
btn.addEventListener("click", getnumber);

// collatz Conjecture
const collatz = (num) => {
  //console.log(num);
  if (num % 2 == 0) {
    console.log(`${num} is even`);
    alleven.push(num);
    return num / 2;
  } else {
    console.log(`${num} is odd`);
    allodd.push(num);
    return 3 * num + 1;
  }
};

//Draw bar in canvas element
const drawBar = (long) => {
  if(count>1){
    cleanCanvas();
    console.log("cleanCanvas"+long);
  }
  canvas.style = "background-color: blue";
  const contex = canvas.getContext("2d");
  contex.fillStyle = "red";
  contex.fillRect(1, 1, long, 80);
};

// Draw div
const drawDiv = (arraynum) => {
  // create element
  arraynum.forEach((element) => {
    let div = document.createElement("div");
    // add class if even or odd
    if (element % 2 == 0) {
      div.className = "div_even";
    } else {
      div.className = "div_odd";
      // if (element == 1) {
      //   div.className = "div_one";
      // }
    }
    div.innerHTML = element;
    container.appendChild(div);
  });
};

const drawOneDiv = (arr) => {
  arr.forEach((element) => {
    let divi = document.createElement("div");
    if (element == 1) {
      divi.className = "div_one";
    }
    divi.innerHTML = element;
    onediv.appendChild(divi);
  });
};

const cleanCanvas = ()=>{
  //canvasdiv.innerHTML="";
  canvas.style = "background-color: blue";
  const contex = canvas.getContext("2d");
  contex.fillStyle = "blue";
  contex.fillRect(1, 1, widthClientInner, 80);

}
