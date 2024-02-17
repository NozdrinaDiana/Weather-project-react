import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [futureForecast, setFutureForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

   function handleResponse(response) {
       setFutureForecast(response.data.daily);
       setLoaded(true);
    }

    if (loaded) {
        return (
        <div>
        <div className="flex">
                    {futureForecast.map(function (dailyForecast, index) {
                        if (index > 0 && index < 7 ) {
                            return (
                                <div className="flex-forecast" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );
                        } else {
                            return <></>
                        }
                    })}
             </div>
        </div>
        );       

    } else {
        let apiKey = "ad793a6d772939c31783de5822791acf";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return null;
     }
} 