// apiKey = "zdLOYON63I57e28D+eT50A==Petve28I6tGyNYBb";
// apiUrl = "https://api.api-ninjas.com/v1/weather?city=";


//event listener for button and to read text input
window.addEventListener("DOMContentLoaded" , ()=> {
  const searchBox = document.getElementById("input")
  const searchBtn = document.getElementById("submit")

    //runs checkWeather function
    const getInputValue = () => {
      checkWeather(searchBox.value)
    }


    searchBtn.addEventListener('click', getInputValue,);



  })
  
  
//accesses api and changes data on the page
async function checkWeather(city) {
  const response = await fetch('https://api.api-ninjas.com/v1/weather?city=' + city , { headers: { 'X-API-Key': 'zdLOYON63I57e28D+eT50A==Petve28I6tGyNYBb' } });
  var data = await response.json();
    
  console.log(data);

  const weatherIcon = document.querySelector("img")
  
  //defines each value and changes html data
  document.querySelector(".city").innerHTML = capitalizeFirstLetter(city);
  document.querySelector(".temp").innerHTML = FtoC(data.temp) + "°F"
  document.querySelector(".humidity").innerHTML = data.humidity + "%"
  document.querySelector(".windSpeed").innerHTML = data.wind_speed + "MPH"
  
  console.log(data.cloud_pct)
  
  //depending on how cloudy it is it changes the image from sunny to cloudy
  if(data.cloud_pct <= 50){
    weatherIcon.src = "./assets/sunny.png"
  }else if(data.cloud_pct > 50){
    weatherIcon.src = "./assets/7084486.png"
  }
}

//always capitalizes the name of the city
function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

//converts the temp data which is in celcius to farenheit
function FtoC(temp) {
  return Math.round((9/5) * temp + 32);
}


