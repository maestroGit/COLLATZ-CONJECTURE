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
const container = document.getElementById("container");
const number = document.getElementById("number");
const btn = document.getElementById("btn");
console.log(`Default value: ${number.defaultValue}`);

// Variables
let num;
let steep = 1;
let label;
console.time(label);
const alleven = [];
const allodd = [];
let evenRound;

// get input number
const getnumber = () => {
  let inputValue = document.getElementById("number").value;
  console.log(`Numero : ${inputValue}`);
  num = inputValue;
  do {
    //console.log(num+" :en do")
    num = collatz(num);
    steep++;
    console.log(`steep:${steep}`);
  } while (num != 1);
  if (num == 1) {
    console.log("finished");
    let arr = [1];
    drawDiv(arr);
    // let div = document.createElement("div");
    // container.append(div);


    //document.write(`<br>${num}`);
    const totalnum = alleven.length + allodd.length;
    console.log(alleven.length);
    console.log(totalnum);
    const averagEven = (alleven.length / totalnum) * 100;
    let evenRound;
    evenRound = Math.round(averagEven);
    console.log(evenRound);
    const arraynum = alleven.concat(allodd);
    drawDiv(arraynum);
    console.timeEnd(label);
    drawBar(evenRound * 10);
  }
};

btn.addEventListener("click", getnumber);

// collatz Conjecture
const collatz = (num) => {
  //console.log(num);
  if (num % 2 == 0) {
    console.log(`${num} is even`);
    //document.write(`<br>${num}`);
    alleven.push(num);
    return num / 2;
  } else {
    console.log(`${num} is odd`);
    //document.write(`<br>${num}`);
    allodd.push(num);
    return 3 * num + 1;
  }
};

//Draw bar
const drawBar = (long) => {
  let canvas = document.getElementById("root");
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
    if(element%2 == 0){
      div.className = "div_even";
    }else {
      div.className = "div_odd";
    }
    div.innerHTML=element;
    container.append(div);
  });
};

