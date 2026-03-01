function convert() {
    const valInput = document.getElementById("tempInput").value;
    const unit = document.getElementById("unitSelect").value;
    const display = document.getElementById("resultDisplay");

    if (valInput === "") {
        display.innerHTML = "Enter a number";
        return;
    }

    const temp = parseFloat(valInput);
    let resultText = "";

    if (unit === "F") {
        // Fahrenheit to Celsius and Kelvin
        let c = (temp - 32) * 5/9;
        resultText = `${c.toFixed(4)} °C`;
    } 
    else if (unit === "C") {
        // Celsius to Fahrenheit
        let f = (temp * 9/5) + 32;
        resultText = `${f.toFixed(4)} °F`;
    } 
    else if (unit === "K") {
        // Kelvin to Celsius
        let c = temp - 273.15;
        resultText = `${c.toFixed(4)} °C`;
    }

    display.innerHTML = resultText;
}
