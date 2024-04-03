let result = document.getElementById('result');
let currnetExpression = '';

function appendNumner(num) {
    currnetExpression += num;
    result.value = currnetExpression;
}

function clearResult() {
    currnetExpression = '';
    result.value = currnetExpression;
}

function calculateResult() {
   try {
    currnetExpression = eval(currnetExpression);
    result.value = currnetExpression;
   }
   catch {
    result.value = 'Error';
   }
}

function appendSymbol(symbol) {
    currnetExpression += symbol;
    result.value = currnetExpression;
}