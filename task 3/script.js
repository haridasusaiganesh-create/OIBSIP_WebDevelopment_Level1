function convertTemp() {

    let degrees = document.getElementById("degrees").value;
    let type = document.getElementById("type").value;
    let resultField = document.getElementById("result");

    if (degrees === "") {
        resultField.value = "Please enter a value";
        return;
    }

    degrees = parseFloat(degrees);

    if (type === "fahrenheit") {
        // Convert Fahrenheit to Celsius
        let result = (degrees - 32) * 5 / 9;
        resultField.value = result.toFixed(4) + " °C";
    } else {
        // Convert Celsius to Fahrenheit
        let result = (degrees * 9 / 5) + 32;
        resultField.value = result.toFixed(4) + " °F";
    }
}
