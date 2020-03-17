function Popper() {
  var result;
  var tempInFahrenheit = prompt("Please Enter temperature in Fahrenheit", 0);
  if (tempInFahrenheit == null || tempInFahrenheit == "") {
    result = "No input";
  } else {
    result = (tempInFahrenheit-32)*(5/9);
    result = "Temperature in Celsius: " +result;
  }
  alert(result);
}
