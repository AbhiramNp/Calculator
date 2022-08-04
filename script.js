let x;
let y;
let operator;
let result;

let math = {
    x: "",
    y: "",
    operator: "",
    firstNumArray: [],
    secondNumArray: [],
};

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');  
const equalButton = document.querySelector('.equalButton');
const clearButton = document.querySelector('.clearButton');

//sets the value of the operator

operatorButtons.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        console.log("operator button clicked")
        math.operator = btn.value    
        updateDisplay();
        console.log(math)
        //if (result)


// will check that result is equal to a truthy value,
// which means anything except 
// false, 0, -0, 0n, "", null, undefined, and NaN.
// once that condition is satisfied / passes,
// then it will run the block, otherwise it won't

        
        if (math.y) {               //if y exists and we push operator then x will be the answer and everything else will be emplty
            math = {
                x: result,
                y: "",
                operator: btn.value,
                firstNumArray: [],
                secondNumArray: [],
            };
            console.log(result);
            display.textContent = result;
            updateDisplay();
            return result;
        }
    })
});


        //set value of first and second number in relation to operator
            numberButtons.forEach((button) => {
            button.addEventListener('click', function(ev) {
                console.log("Number button clicked")
                if (math.operator) {
                    math.secondNumArray.push(button.value);
                    y = math.secondNumArray.join('');
                    console.log(y);
                    math.y = parseFloat(y);
                    console.log(typeof math.y);
        
                    // math.y += button.value;
                } else {
                    math.firstNumArray.push(button.value);
                    x = math.firstNumArray.join('');
                    math.x = parseFloat(x);
                    // math.x += button.value;
                }
                console.log(math)
                updateDisplay();
        
        /*-------sets solution to previous problem as new first input-------*/
                if (math.operator) {
                    result = (operation(math.x, math.operator, math.y));
                    console.log(" result = (operation(math.x, math.operator, math.y));")
                }
            });
        });

        
      /*-------SHOULD solve the function-------*/
      equalButton.addEventListener('click', function(e){
        if (result)
            math = {
                x: result,
                y: "",
                operator: "",
                firstNumArray: [],
                secondNumArray: [],
            };
        display.textContent = result;
        console.log("result is " + result)
        console.log(math);
      })
      function updateDisplay() {
        
        display.textContent = `${math.x} ${math.operator} ${math.y}`;
        console.log("Displaying");
        
    }
    
    
    function add(x, y) {
        console.log("Adding");
        return x + y;
    };
    
    function subtract (x, y) {
        console.log("subtracting");

        return x - y;
    };
    
    function multiply(x, y) {
        console.log("multiplying");

        return x * y;
    };
    
    function divide (x, y) {
        console.log("dividing");

        if(y === 0 && x!== 0){
            alert("NO DONT DO IT")
        }
        else{
        return x / y;
        }
    };
    
    function operation(x, operator, y) {
    
        if (operator == "+") {
            console.log("Addition operator check")
            return add(x, y);
        } else if (operator == "-") {
            console.log("subtraction operator check")
           return subtract(x, y);
        } else if (operator == "*") {
            console.log("multiplication operator check")
            return multiply(x, y)
        } else if (operator == "/") {
            console.log("divison operator check")
            return divide(x, y)
        }
          
    
    };
    
    clearButton.addEventListener('click',() => {
        console.log("Clear Button Clicked")
        window.location.reload();
    })

