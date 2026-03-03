function convert() {
    var value = document.getElementById("temp").value;
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");

    if (value === "") {
        result.innerHTML = "Please enter a value";
        return;
    }

    if (unit === "c") {
        var f = (value * 9/5) + 32;
        result.innerHTML = value + "°C = " + f.toFixed(2) + "°F";
    } else {
        var c = (value - 32) * 5/9;
        result.innerHTML = value + "°F = " + c.toFixed(2) + "°C";
    }
}
