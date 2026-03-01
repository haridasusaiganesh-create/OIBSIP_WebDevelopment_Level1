function convertTemperature() {
    // Get the input value and the selected unit
    const tempValue = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const resultArea = document.getElementById("result");

    // Check if input is empty
    if (tempValue === "") {
        resultArea.innerHTML = "⚠️ Please enter a number";
        resultArea.style.color = "#ff5e5e";
        return;
    }

    const temp = parseFloat(tempValue);
    let c, f, k;

    // Conversion Logic
    if (unit === "celsius") {
        c = temp;
        f = (temp * 9/5) + 32;
        k = temp + 273.15;
    } else if (unit === "fahrenheit") {
        c = (temp - 32) * 5/9;
        f = temp;
        k = c + 273.15;
    } else if (unit === "kelvin") {
        c = temp - 273.15;
        f = (c * 9/5) + 32;
        k = temp;
    }

    // Display formatted results
    resultArea.style.color = "#f7b731";
    resultArea.innerHTML = `
        <div style="font-size: 1.2rem; font-weight: bold;">
            ${c.toFixed(2)} °C <br>
            ${f.toFixed(2)} °F <br>
            ${k.toFixed(2)} K
        </div>
    `;
}
