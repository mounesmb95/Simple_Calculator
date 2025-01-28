function display(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculate() {
    let input = document.getElementById('result').value;
    try {
        let result = eval(input);  // Using eval to calculate the expression
        document.getElementById('result').value = result;
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
