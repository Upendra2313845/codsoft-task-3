function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Use eval to calculate the expression
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
