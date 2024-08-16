const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

class Calculataor{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    // Formata o valor recebido para que apareça um , em numeros grandes
    formatDisplay(number){
        
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];

        let intergerDisplay;

        if (isNaN(integerDigits)) {
            intergerDisplay = '';
        }
        else{
            intergerDisplay = integerDigits.toLocaleString("en",{ maximumFractionDigits: 0,});
        }

        if (decimalDigits != null){
            return `${intergerDisplay}.${decimalDigits}`;
        }
        else{
            return intergerDisplay;
        }
    }

    // Faz o calculo apartir do operador passado
    calculate(){
        const _previousOperand = parseFloat(this.previousOperand);
        const _currentOperand = parseFloat(this.currentOperand);

        if (isNaN(_previousOperand) || isNaN(_currentOperand )) return;

        switch (this.operantion) {
            case '+':
                return _previousOperand + _currentOperand;

            case '*':
                return _previousOperand * _currentOperand;

            case '÷':
                return _previousOperand / _currentOperand;

            case '-':
                return _previousOperand - _currentOperand;
            
            case '=':
                return _currentOperand;

            default:
                return;
        }
    }

    // Mostra os dados na tela
    updateDisplay(){

        if (this.operantion && this.previousOperand != undefined){
            this.previousOperandTextElement.innerText = `${this.formatDisplay(this.previousOperand)} ${this.operantion}`;
        }
        
        this.currentOperandTextElement.innerText = `${this.formatDisplay(this.currentOperand)}`;
    }

    // Apaga o ultimo caracter do numero que esta sendo recebido
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
        this.updateDisplay();
    }

    // Lima os dados da tela
    clear(){
        this.previousOperand = '';
        this.currentOperand = '';
        this.operantion = undefined;
        this.updateDisplay();
    }

    // add mais um caracter no valor recebido
    appendNumber(number){
        if(this.currentOperand.includes(".") && number === '.') return;

        this.currentOperand = `${this.currentOperand}${number.toString()}`;
        this.updateDisplay();
    }

    // Faz a operação matematica e renova os dados
    chooseOperation(operator){
        if (this.currentOperand === ''){
            this.operantion = operator;
            this.updateDisplay();
            return;
        };

        if (this.currentOperand === '.') return;

        if (this.previousOperand != ''){
            this.currentOperand = this.calculate();
        }
        this.operantion = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        this.updateDisplay();
    }

    // mostra o resultado do ultimo calculo add
    equalsOperation(){
        if (this.currentOperand === '') return;

        if (!this.operantion) {
            this.operantion = equalsButton.innerText;
        }
        this.chooseOperation(this.operantion);
    }
}

const calculator = new Calculataor(previousOperandTextElement, currentOperandTextElement);

// Espera um evento de click em todos os numeros
for (let numberButton of numberButtons)
{
    numberButton.addEventListener('click', () => calculator.appendNumber(numberButton.innerText));
}

// Espera um evento de click nos operadores
for (let operationButton of operationButtons) {
    operationButton.addEventListener('click', () => calculator.chooseOperation(operationButton.innerText));
};

// Espera um evento de click no botão AC
allClearButton.addEventListener('click', () => calculator.clear());

// Espera um evento de click no botão DEL
equalsButton.addEventListener('click', () => calculator.equalsOperation());

// Espera um evento de click no botão =
deleteButton.addEventListener('click', () => calculator.delete());


// Espera um evento de tecla subindo 
addEventListener('keyup', (event) => {
    let key = event.key;
    const listKey = '1234567890.'
    const listOperator = '+-/*='

    if(listKey.includes(key)) calculator.appendNumber(key);
    
    if(listOperator.includes(key))calculator.chooseOperation(key);

    if (key === 'Backspace') calculator.delete();

    if (key === 'Delete') calculator.clear();
});
