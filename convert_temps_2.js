function secondPopper() {
  var result;
  var flag = 0;
  var tempInFahrenheit = prompt("Please Enter temperature in Fahrenheit", 0);
    
   while(tempInFahrenheit !== 999){ 
          if (tempInFahrenheit == null || tempInFahrenheit == "") {
            result = prompt("No input");

          } 

          else if(tempInFahrenheit > 212 || tempInFahrenheit < -100)
          {
              tempInFahrenheit = prompt("You entered "+tempInFahrenheit+"\nEntry must range from -100 to 212");

          }

          else {
            result = (tempInFahrenheit-32)*(5/9);
            alert("Temperature in Celsius: "+result);
            break;
          }
          
   }
}
