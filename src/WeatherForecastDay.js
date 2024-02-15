import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return (days[day]);
    }
    function data() {
        let data = new Date(props.data.dt * 1000);
        let newdata = data.getDate();
        return (newdata);
    }
    return (
        <div >
            <h2 className="day-forecast">{day()}</h2>
            <h4 className="data-forecast">The {data()}<sup>th</sup> </h4>
            <p className="temp-forecast"><span className="max-temp">{Math.round(props.data.temp.max)}
            </span>°C / <span className="min-temp">{Math.round(props.data.temp.min)}</span>°C</p>
            <p className="description">{props.data.weather[0].description}</p>
            <div className="icon-forecast">
                <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt=""  className="item-forecast"/>
            </div>
        </div>
    );
}