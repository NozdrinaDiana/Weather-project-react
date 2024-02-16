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
       console.log(response.data);
       setFutureForecast(response.data.daily);
       setLoaded(true);
    }

    if (loaded) {
        console.log(futureForecast);
        return (
        <div>
        <div className="grid">
                    {futureForecast.map(function (dailyForecast, index) {
                        if (index > 0 && index < 7 ) {
                            return (
                                <div className="grid-forecast" key={index}>
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
        let apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return null;
     }
} 