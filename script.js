
let number = document.querySelectorAll(".btn-number");
let operator = document.querySelectorAll(".btn-operator")
let clear = document.querySelector(".btn-clear")
let dot = document.querySelector(".btn-float")
let display = document.querySelector(".display");
display.innerText = 0;
let firstNum = "";
let secondNum = "";
let op = "";
let numArray1 = [];
let numArray2 = [];



function operate (Num1,Num2,oper){
number.forEach(numbers =>{
    numbers.addEventListener('click',(e)=>{

        
        if(oper === "" ) {
        num1 = e.target.innerText;
        numArray1.push(num1);
        console.log(numArray1);
        if(numArray1.length <= 7){
        Num1=numArray1.join("");
        Num1=parseInt(Num1);
        console.log(Num1);
        display.innerText = Num1;
        console.log(typeof Num1)
        }
        else{
            alert("Maximum numbers");
        }
        }
        else{
            num2 = e.target.innerText;
            numArray2.push(num2);
            console.log(numArray2);
            if(numArray2.length <= 7){
            Num2=numArray2.join("");
            Num2=parseInt(Num2);
            console.log(Num2);
            display.innerText = Num2;
            console.log(typeof Num2)
            }
            else{
                alert("Maximum numbers");
            }
            }

        }

    )
})


function sumesh(Num1,Num2,opt){
operator.forEach(operators => {
operators.addEventListener('click',(e) => {
    if(e.target.innerText === '='){
         
        switch(oper){
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
                if(Num2 === 0){
                    alert("This cannot happen")
                    break;
                }
                let divide = Num1 / Num2;
                if(Num1 < Num2){
                divide = divide.toFixed(2);
                display.innerText = divide;
                }
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
        oper = e.target.innerText;
        console.log(oper);
        console.log(typeof oper)
        }
    })
})
} 
sumesh();

}

    
operate(firstNum,secondNum,op);





clear.addEventListener('click',() => {
    window.location.reload();
})

