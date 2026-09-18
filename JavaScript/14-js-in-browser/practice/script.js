//task 1
let btn1 = document.getElementById("changeTextButton");
btn1.addEventListener("click", () =>{
    let para = document.getElementById("myParagraph");
    para.textContent = "Text content is changed";
});

//task 2
let btn2 = document.getElementById("highlightFirstCity");
btn2.addEventListener("click", () => {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});

//task 3
let btn3 = document.getElementById("changeOrder");
btn3.addEventListener("click", () => {
    let order = document.getElementById("coffeeType");
    order.textContent = "Espresso";
    order.style.color= "brown";
});

//task 4
let btn4 = document.getElementById("addNewItem");
btn4.addEventListener("click", () => {
    let shopppingList = document.getElementById("shoppingList");
    let el = document.createElement("li")
    el.innerText = "Rice";
    shopppingList.append(el);
});

//task 5
let btn5 = document.getElementById("removeLastTask");
btn5.addEventListener("click", () => {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
});

//task 6
let btn6 = document.getElementById("clickMeButton");
btn6.addEventListener("dblclick", () => {
    alert("button clicked");
});

//task 7
let teaList = document.getElementById("teaList");
teaList.addEventListener("click", (event) => {
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected " + event.target.textContent);
    }
})

// task 8
let inputForm = document.getElementById("feedbackForm");
inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let feedBack = document.getElementById("feedbackInput").value;
    let display = document.getElementById("feedbackDisplay");
    display.textContent = feedBack;
})

//task 9
// document.addEventListener("DOMContentLoaded", setTimeout(() =>{
//     document.getElementById("domStatus").textContent = "DOM fully loaded";
// }, 3000));

//task 10
let btn10 = document.getElementById("toggleHighlight");
btn10.addEventListener("click", () => {
    let para = document.getElementById("descriptionText");
    para.classList.toggle("highlight");
});
