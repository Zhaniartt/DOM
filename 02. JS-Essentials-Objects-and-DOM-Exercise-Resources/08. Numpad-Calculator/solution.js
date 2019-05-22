function solve() {
    let expression = document.querySelector('p#expressionOutput');
    let resultOutput = document.querySelector('p#resultOutput');
    [...document.querySelectorAll('button')]
        .filter(x => x.value !== '=' && x.value !== 'Clear')
        .forEach(x => x.addEventListener('click', displayExpression));
 
    document.querySelector('button[value="="]').addEventListener('click', displayResult);
    document.querySelector('button[value="Clear"]').addEventListener('click', clear);

                    let add = (c,d)=> c+d;
                    let subtract = (c,d) => c-d;
                    let multiply = (c,d) => c*d;
                    let divide = (c,d) => c/d;
    function displayResult(){
        let currentValue = this.value
        if(currentValue !== '='){
            expression.textContent += currentValue
         }
        if(currentValue === '='){
            let total = 0
            let [num1,num2] = expression.textContent.split(/[\*\/\-\+]+/);
            let op =  expression.textContent.match(/[^.\d]/)[0]
           if(expression.textContent.match(/^[\d.?]+\s?[*-\/+]\s?[\d.?]+/)){
            switch(op){
                case '*': total =  multiply(num1,num2)
                break;
                case '+': total =  add(num1,num2)
                break;
                case '-': total = subtract(num1,num2)
                break;
                case '/': total =  divide(num1,num2)
             }
           }else{
               total = 'NaN'
           }
           resultOutput.textContent = total
    }
        
    }
    function clear(){
        expression.textContent = ''
        resultOutput.textContent = ''
    }
    
}
