
const apiKey="41a33b818b367d43584274c396990175";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const imgWeather=document.querySelector(".img-weather");
const searchInput=document.querySelector(".input-box");
const searchBtn=document.querySelector(".button-search");

async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404){
document.querySelector(".error").style.display="block";
document.querySelector(".weather").style.display="none";
    }else{
        const data=await response.json();

        document.querySelector(".city-name > span").innerHTML=data.name;
        document.querySelector(".degree > span").innerHTML=Math.round(data.main.temp) + " °C";
        document.querySelector(".percent > span").innerHTML=data.main.humidity + " %";
        document.querySelector(".km > span").innerHTML=data.wind.speed + " km/h";
    
        if(data.weather[0].main=="Clouds"){
    imgWeather.src="image/clouds.png";
        }else if(data.weather[0].main=="Clear"){
            imgWeather.src="image/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            imgWeather.src="image/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            imgWeather.src="image/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            imgWeather.src="image/mist.png";
        }
        document.querySelector(".error").style.display="none";
document.querySelector(".weather").style.display="block";
        console.log(data)
    }
   
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchInput.value);
})