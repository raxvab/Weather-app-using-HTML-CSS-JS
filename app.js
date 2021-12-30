var input = document.querySelector(".input_text");
var main = document.querySelector("#name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var clouds = document.querySelector(".clouds");
var button = document.querySelector(".submit");

button.addEventListener("click", function (name) {
//    var a=setInterval( button.style.background="grey",10);
//    clearInterval(a);
 fetch(
   "https://api.openweathermap.org/data/2.5/weather?q=" +
     input.value +
     "&appid=d0e7c4b2bb158842a6cbd5ce28817183"
 )
   .then((response) => response.json())
   .then((data) => {
     var tempValue = data["main"]["temp"];
     var nameValue = data["name"];
     var descValue = data["weather"][0]["description"];
var tempreal=parseFloat(tempValue-273).toFixed(2);

     main.innerHTML = nameValue;
     desc.innerHTML = "Desc - " + descValue;
     temp.innerHTML = "Temp - " + tempreal+"°C";
     
     input.value = "";
   })

   .catch((err) => alert("Wrong city name!"));
});
