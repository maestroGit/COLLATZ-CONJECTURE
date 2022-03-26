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
const canvas = document.getElementById("root");
canvas.setAttribute("width", widthClientInner); 
const container = document.getElementById("container");
const number = document.getElementById("number");
const btn = document.getElementById("btn");
//console.log(`Default value: ${number.defaultValue}`);

// Variables
let num;
let steep = 1;
let label;
//console.time(label);
const alleven = [];
const allodd = [];
let evenRound;

// get input number
const getnumber = () => {
  alleven.length = 0;
  allodd.length = 0;
  container.innerHTML = "";
  onediv.innerHTML = "";
  let inputValue = document.getElementById("number").value;
  console.log(`Numero : ${inputValue}`);
  num = inputValue;
  do {
    //console.log(num+" :en do")
    num = collatz(num);
    steep++;
    //console.log(`steep:${steep}`);
  } while (num != 1);
  if (num == 1) {
    console.log("finished=1");
    let arr = [1];
    drawOneDiv(arr);
   
    const totalnum = alleven.length + allodd.length + 1;
    console.log("even:"+alleven.length);
    console.log("total numeros:"+totalnum);
    const averagEven = (alleven.length / totalnum) * 100;
    let evenRound;
    evenRound = Math.round(averagEven);
    console.log("% of even:"+evenRound);
    const arraynum = alleven.concat(allodd);
    drawDiv(arraynum);
    //console.timeEnd(label);
    console.log("total barra:"+widthClientInner)
    let barmesure = (widthClientInner/100)*evenRound;
    console.log("%of even"+barmesure);
    drawBar(barmesure);
  }
};

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

//Draw bar
const drawBar = (long) => {
  let canvas = document.getElementById("root");
  canvas.style = "background-color: blue";
  let contex = canvas.getContext("2d");
  contex.fillStyle = "red";
  contex.fillRect(1, 1, long, 200);
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

const drawOneDiv = (arr)=>{
  arr.forEach((element)=>{
    let divi = document.createElement("div");
    if (element == 1) {
      divi.className = "div_one";
    }
    divi.innerHTML=element;
    onediv.appendChild(divi);
  })
}
