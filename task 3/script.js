function convertTemperature() {

    let degree = document.getElementById("degrees").value;
    let type = document.getElementById("type").value;
    let resultField = document.getElementById("result");

    if (degree === "" || isNaN(degree)) {
        resultField.value = "Please enter valid number";
        return;
    }

    degree = parseFloat(degree);
    let result;

    if (type === "C") {
        result = (degree * 9/5) + 32;
        resultField.value = result.toFixed(4) + " °F";
    }

    else if (type === "F") {
        result = (degree - 32) * 5/9;
        resultField.value = result.toFixed(4) + " °C";
    }

    else if (type === "K") {
        result = degree - 273.15;
        resultField.value = result.toFixed(4) + " °C";
    }
}
