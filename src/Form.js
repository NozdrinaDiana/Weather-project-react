import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [forecast, setForecast] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(getForecast);
  }

  function getForecast(response) {
    console.log(response.data);
   
      setForecast(
        <div>
          <div className="cityName">{city}, {response.data.sys.country}</div>
            <div className="main">
            <ul >
                <li className="grid-left">Temperature: {Math.round(response.data.main.temp)}C°</li>
                <li className="grid-left">Description: {response.data.weather[0].description}</li>
                <li className="grid-left">Humidity: {response.data.main.humidity}%</li>
                <li className="grid-left">Wind: {Math.round(response.data.wind.speed)}m/c</li>
            </ul>
            <div className="grid-right">
                 <img src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`} alt={response.data.weather[0].description } className="item"/>
            </div>
          </div>
        </div>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label for="city-name" class="label-city-name">Please, enter the city name:</label>
            <input type="search" className="form-text" placeholder="Entre a city" onChange={updateCity} />
            <input type="submit" className="button-search" value="Search" />
            <input type="button" className="button-current" value="Current" id="button-current-input"/>
        </form>
      <div className="main-window">{forecast}</div>
    </div>
  );
}