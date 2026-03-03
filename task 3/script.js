function convertTemp() {
  const tempInput = parseFloat(document.getElementById('tempInput').value);
  const result = document.getElementById('result');
  
  // Get selected unit
  const unitElements = document.getElementsByName('unit');
  let selectedUnit;
  for (const u of unitElements) {
    if (u.checked) {
      selectedUnit = u.value;
      break;
    }
  }

  if (isNaN(tempInput)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  let celsius, fahrenheit, kelvin;

  if (selectedUnit === "C") {
    celsius = tempInput;
    fahrenheit = (tempInput * 9/5) + 32;
    kelvin = tempInput + 273.15;
  } else if (selectedUnit === "F") {
    celsius = (tempInput - 32) * 5/9;
    fahrenheit = tempInput;
    kelvin = celsius + 273.15;
  } else { // Kelvin
    celsius = tempInput - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
    kelvin = tempInput;
  }

  result.textContent = 
    `${celsius.toFixed(2)}°C | ${fahrenheit.toFixed(2)}°F | ${kelvin.toFixed(2)}K`;
}
