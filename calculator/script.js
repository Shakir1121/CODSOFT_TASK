let displayValue = '';
function appendToDisplay(value) {
    displayValue += value; // Concatenate the clicked value to the display
    document.getElementById('display').value = displayValue; // Update the display
}
function setOperation(operation) {
    displayValue += ' ' + operation + ' '; // Add a space around the operation for formatting
    document.getElementById('display').value = displayValue;
}
function calculatePercentage() {
    let currentValue = parseFloat(document.getElementById('display').value);
    let percentageValue = currentValue / 100;
    document.getElementById('display').value = percentageValue;
}
function deleteLastCharacter() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    try {
        displayValue = eval(displayValue); // Use eval to calculate the result
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function clearDisplay() {
    displayValue = ''; // Clear the display value
    document.getElementById('display').value = displayValue;
}
