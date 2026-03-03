function convertTemp() {
  const temp = parseFloat(document.getElementById('tempInput').value);
  const unit = document.getElementById('unit').value;
  const result = document.getElementById('result');

  if (isNaN(temp)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  if (unit === "C") {
    const fahrenheit = (temp * 9/5) + 32;
    result.textContent = `${temp}°C = ${fahrenheit.toFixed(2)}°F`;
  } else {
    const celsius = (temp - 32) * 5/9;
    result.textContent = `${temp}°F = ${celsius.toFixed(2)}°C`;
  }
}
