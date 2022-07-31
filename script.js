
let number = document.querySelectorAll(".btn-number");
let operator = document.querySelectorAll(".btn-operator")
let clear = document.querySelector(".btn-clear")
let dot = document.querySelector(".btn-float")
let display = document.querySelector(".display");
display.innerText = 0;
let firstNum = "";
let secondNum = "";
let op = "";

function operate (Num1,Num2,op){
number.forEach(numbers =>{
    numbers.addEventListener('click',(e)=>{
        if(op === ""){
        num1 = e.target.innerText;
        Num1 = parseInt(num1);
        display.innerText = Num1;
        console.log(Num1);
        console.log(typeof Num1)
        }
        else{
            num2 = e.target.innerText;
            Num2 = parseInt(num2);
            display.innerText = Num2;
            console.log(Num2);
            console.log(typeof Num2)
            }

        }

    )
})

operator.forEach(operators => {
operators.addEventListener('click',(e) => {
    if(e.target.innerText === '='){
        switch(op){
            case '+':
                let plus = Num1 + Num2
                display.innerText = plus;
                console.log(plus);
                console.log(typeof plus);
                break;
            case '-':
                let minus = Num1 - Num2
                display.innerText = minus;
                console.log(minus);
                console.log(typeof minus);
                break;
            case '*':
                let multiple = Num1 * Num2
                display.innerText = multiple;
                console.log(multiple);
                console.log(typeof multiple);
                break;
            case '/':
                let divide = Num1 / Num2;
                display.innerText = divide;
                console.log(divide);
                console.log(typeof divide);
                break;
    
    
            default:console.log("Value is default")
               break;
        }
        }        
    else
    {
        op = e.target.innerText;
        console.log(op);
        console.log(typeof op)
        }
    })
})
    
};

operate(firstNum,secondNum,op);
