function convertTemp() {
    var input = document.getElementById("tempInput").value;
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");

    if (input === "") {
        result.innerHTML = "Please enter a value";
        return;
    }

    if (unit === "c") {
        var fahrenheit = (input * 9/5) + 32;
        result.innerHTML = input + "°C = " + fahrenheit.toFixed(2) + "°F";
    } else {
        var celsius = (input - 32) * 5/9;
        result.innerHTML = input + "°F = " + celsius.toFixed(2) + "°C";
    }
}
