/*
✅ Q4. Calculator with Callback
Scenario:
Ek calculator banaana hai jisme operation (add, subtract, multiply) callback ke through decide hoga.

Task:

Create function calculate(a, b, operationCallback)

It should return result from the passed callback
*/

function calculate(a,b,operationCallback) {
    
    console.log(operationCallback(a,b))
}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

calculate(5,5,add);
calculate(10,10,multiply)
calculate(100,10,subtract)