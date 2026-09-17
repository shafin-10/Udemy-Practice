function stringToNumber(input) {
  let number = Number(input);
  if (number != input) {
    return "Not a number";
  } else {
    return number;
  }
}

function flipBoolean(input) {
  let res = !input;
  return res;
}

function whatAmI(input) {
  if (typeof input === "number") {
    return "I'm a number!";
  } else if (typeof input === "string") {
    return "I'm a string!";
  }
}

function isItTruthy(input) {
  if (input) {
    return "It's truthy!";
  } else {
    return "It's falsey!";
  }
}

// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
  return a + b;
}

// Subtract small value from larger one
function subtract() {
  return b - a;
}

function multiply() {
  return a * b;
}

// Divide larger value by small
function divide() {
  return b / a;
}

// Increase value of a by 1
function increment() {
  let x = a;
  return ++x;
}

// Decrease value of b by 1
function decrement() {
  let x = b;
  return --x;
}

// Divide larger value by small to find the reminder
function reminder() {
  return b % a;
}

function filterNumbers(arr) {
  let newArr = [];
  for (let i of arr) {
    if (typeof i === "number") {
      newArr.push(i);
    }
  }
  return newArr;
}


function reverseArray(arr) {
 arr.reverse();
  return arr;
}


function findMax(arr) {
  let max = -Infinity;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
  }
  return max;
}


function removeDuplicates(arr) {
  let newArr = [];
  arr.forEach(i => {
    if(!newArr.includes(i)){
        newArr.push(i);
    }
  });
  return newArr;
}



function flattenArray(arr) {
  let newArr = [];
  for (let item of arr) {
    if(Array.isArray(item)){
        newArr = newArr.concat(flattenArray(item));
    }else{
        newArr.push(item);
    }
  }
  return newArr;
}


function sumOfN(n) {
  let sum = (n * (n + 1)) / 2;
  return sum;
}


function printMultiplicationTable(n) {
  let table = [];
  for(let i = 1; i <= 10; i++){
    table.push(`${n} * ${i} = ${n * i}`);
  }
  return table;
}




function countVowels(str) {
  let count = 0;
  for (let item of str) {
    let x = item.toLowerCase();
    if(x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u'){
      count++;
    }
  }
  return count;
}

const squareNumbers = (arr) => 
  arr.map((num) => num * num);




 const filterEvenNumbers = (arr) => (
  arr.filter((num) => !(num % 2))
 );

 

 const sumPositiveNumbers = (arr) => {
  let x = arr.filter(num => num > 0)
  .reduce((total, num) => total + num, 0);
  return x;
 };
  
 

 const getNames = (arr) => (
  arr.map((item) => item.name)
 );



const findLongestWord = (arr) => (
  arr.reduce((longest, word) => word.length > longest.length? word : longest)
);



const person = {
     name : "Hitesh",
     age : "19.5",

    introduce : function(){
      return `Hi, my name is ${this.name} and I am ${this.age} years old`;
      
    }
};


function outer() {
  function inner(){
    return "Inner function called";
  }
  return inner();
}


