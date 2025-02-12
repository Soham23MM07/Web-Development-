document.addEventListener("DOMContentLoaded", () => {
  const Input = document.getElementById("Add-Input");
  const CityBtn = document.getElementById("Add-City");
  const CityName = document.getElementById("city-name");
  const Temp = document.getElementById("temperature");
  const description = document.getElementById("description");
  const Error = document.getElementById("error-message");
  const WeatherInfo = document.getElementById("weather-info");
  const Speed = document.getElementById("speed");
  const Hum = document.getElementById("humidity");

  const API_KEY = "3108b26f2a625b9a0d45406948b9159a"; //env variables

  CityBtn.addEventListener("click", async () => {
    let textW = Input.value.trim();
    if (textW === "") return;

    //   As soon as we have grabbed the button we have to make a request
    //   Get your API_KEY
    // if we are grabbing data for any server remember one thing
    // it may throw error
    // server is in another contienent (take some time)

    try {
      weatherdata = await fectchData(textW);
      displayData(weatherdata);
    } catch (error) {
      showError();
    }

    Input.value = "";
  });

  async function fectchData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(response);

    if (!response.ok) {
      Error.classList.add("hidden");
    }

    const data = await response.json();
    return data;
  }
  function displayData(data) {
    console.log(data);
    const { name, main, weather, wind } = data;
    CityName.innerHTML = name;
    Temp.innerHTML = `Temperature :${main.temp} `;
    Speed.innerHTML = `WindSpeed:${wind.speed}`;
    Hum.textContent = `Humidity:${main.humidity}%`;
    description.innerHTML = `Description :${weather[0].description}`;

    WeatherInfo.classList.remove("hidden");
    Error.classList.add("hidden");
  }
  function showError() {
    Error.classList.remove("hidden");
    WeatherInfo.classList.add("hidden");
  }
});
