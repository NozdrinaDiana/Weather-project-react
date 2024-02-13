import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    
   function handleResponse(response) {
        console.log(response.data);
}
    let apiKey = "a867e25f2d83db579421a57fd8e937ec";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    console.log(props);
    return (
        <div className="grid">
        <div className="grid-forecast">
            <h2 className="day-forecast">Sunday</h2>
            <p className="data-forecast">The 12<sup>th</sup> of February </p>
            <p className="temp-forecast"><span className="max-temp">12
            </span>°C / <span className="min-temp">4</span>°C</p>
            <div className="icon-forecast">
                <img src="/" alt=""/>
            </div>
        </div>
        </div>
    );
} 