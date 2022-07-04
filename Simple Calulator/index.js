let num1 = 5;
let num2 = 1;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let ans = document.getElementById("ans-el");

function add() {
    ans.textContent = num1 + num2;
}

function sub() {
    ans.textContent = num1 - num2;
}

function mult() {
    ans.textContent = num1 * num2;
}

function div() {
    ans.textContent = num1 / num2;
}