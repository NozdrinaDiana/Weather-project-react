import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [forecast, setForecast] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(getForecast);
  }

  function getForecast(response) {
      setForecast(
        <div>
          <div className="main-window">
          <div className="cityName">{city}, {response.data.sys.country}</div>
          <FormattedDate date={new Date(response.data.dt*1000)} />
          <div className="main">
            <div className="main-left">
            <div className="grid-left">
                <img src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                  alt={response.data.weather[0].description} className="item " />
              </div>
              </div>
              <div className="grid-center temperature">
                <Temperature Metric={response.data.main.temp}/>
              </div>         
              <div className="grid-right">
                <ul >
                  <li>Description: {response.data.weather[0].description}</li>
                  <li>Humidity: {response.data.main.humidity}%</li>
                  <li>Wind: {Math.round(response.data.wind.speed)}m/c</li>
                </ul>
              </div>
            </div>
            </div>
          <div>
             <WeatherForecast coordinates={response.data.coord} />
         </div>         
        </div>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if(forecast){
    return (
      <div>
          <form onSubmit={handleSubmit}>
              <label for="city-name" className="label-city-name">Please, enter the city name:</label>
              <input type="search" className="form-text" placeholder="Enter a city" onChange={updateCity} />
              <input type="submit" className="button-search" value="Search" />
          </form>
        <div >{forecast}</div>    
      </div>
    );
  } else {
    handleSubmit({preventDefault: function() {}})
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label for="city-name" className="label-city-name">Please, enter the city name:</label>
          <input type="search" className="form-text" placeholder="Enter a city" onChange={updateCity} />
          <input type="submit" className="button-search" value="Search" />
        </form>
      </div>
    )
  }
}