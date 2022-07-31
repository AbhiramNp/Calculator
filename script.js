// function add(a,b){
//     return a+b;
// }
// function sub(x,y){
//     return x-y;
// }
// function div(a,b){
//     return a/b;
// }
// function multiply(a,b){
//     return a*b;
// };
// add(3,2);
// sub(3,2);

let number = document.querySelectorAll(".btn-number");
let operator = document.querySelectorAll(".btn-operator")
let clear = document.querySelector(".btn-clear")
let dot = document.querySelector(".btn-float")
let display = document.querySelector(".display");
display.innerText = 0;
let firstNum = "";
let secondNum = "";
let operative = "";


function operate(firstNum,secondNum,operative){
number.forEach(numbers =>{
    numbers.addEventListener('click',(e)=>{
        numb = e.target.innerText;
        num = parseInt(numb);
        display.innerText = num;
        console.log(num);
        console.log(typeof num)

    })
})

operator.forEach(operators => {
operators.addEventListener('click',(e) => {
    op = e.target.innerText;
    console.log(op);
    console.log(typeof op)
})
    
});
}



// function operate(num1,num2,operator)
// {

// }