function toCelsius() {
  var celsius = (document.getElementById('userInput').value -32) * 5 / 9;
  celsius = Math.round(celsius);
  document.getElementById('result').innerHTML = userInput.value + " Fahrenheit is " + celsius + " Celsius";
}

function toFahrenheit() {
  var fahrenheit = document.getElementById('userInput').value * 9 / 5 +32;
  fahrenheit = Math.round(fahrenheit);
  document.getElementById('result').innerHTML = userInput.value + " Celsius is " + fahrenheit + " Fahrenheit";
}
