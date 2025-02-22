
let searchBtn = document.querySelector("#searchBtn");
let inp = document.querySelector("#inp");
let cloudImg = document.querySelector("#cloudImg");
let temp = document.querySelector("#temp");
let humani = document.querySelector("#humani");
let wind = document.querySelector("#wind");


async function autoWeather() {
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=6f84ca73b6e094ad45177be38b1867cf&units=metric";
    let res = await fetch(apiUrl);
    let data = await res.json();
    console.log(data);
    temp.innerText = data.main.temp;
    humani.innerText = data.main.humidity;
    wind.innerText = data.wind.speed;
    let iconCode = data.weather[0].icon;
    cloudImg.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
 }
autoWeather();


searchBtn.addEventListener("click", function(){
    let cityName =  inp.value;
    if(cityName === ""){
        alert("Please Enter City Name")
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6f84ca73b6e094ad45177be38b1867cf&units=metric`;
               async function myWeather() {
                  let res = await fetch(url);
                  let data = await res.json();
                  if(!res.ok){
                    alert("Enter Right City Name");
                  }
                  console.log(data);
                  temp.innerText = data.main.temp;
                  humani.innerText = data.main.humidity;
                  wind.innerText = data.wind.speed;
                  let iconCode = data.weather[0].icon;
                  cloudImg.src = `https://openweathermap.org/img/wn/${iconCode}.png`;     
                }
                myWeather();
            }
            catch(err){
                alert("Data Not Found");
            }
    }
})


