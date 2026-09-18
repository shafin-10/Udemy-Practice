// setTimeout(() => 
//     console.log("hello from site time out")
//     ,3000);
// setInterval(() => 
//     console.log("hello from site time ínterval"), 1000);
// console.log("hello");

function outer(){
    let counter = 0;
    function inner(){
        counter++;
        return counter;
    }
    return inner;
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());

