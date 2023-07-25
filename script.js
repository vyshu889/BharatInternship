function convertTemp() {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = celsiusToFahrenheit(celsius);
  var kelvin = celsiusToKelvin(celsius);
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  document.getElementById("kelvin").value = kelvin.toFixed(2);
}

function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 1.8) + 32;
  return fahrenheit;
}

function celsiusToKelvin(celsius) {
  var kelvin = celsius + 273.15;
  return kelvin;
}
