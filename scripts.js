function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let result;

    if (isNaN(inputValue)) {
        document.getElementById('result').textContent = "Please enter a valid number.";
        return;
    }

    if (inputUnit === "celsius") {
        result = (inputValue * 9/5) + 32;
        document.getElementById('result').textContent = `${inputValue}°C is ${result.toFixed(2)}°F`;
    } else if (inputUnit === "fahrenheit") {
        result = (inputValue - 32) * 5/9;
        document.getElementById('result').textContent = `${inputValue}°F is ${result.toFixed(2)}°C`;
    }
}
