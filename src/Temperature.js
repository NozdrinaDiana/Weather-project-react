import React, { useState } from "react";

export default function Temperature(props) {
    let [unit, setUnit] = useState("Metric");
  //  let [temperature, setTemperature] = useState(props.Metric);

    function Fahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function Celsius(event) {
          event.preventDefault();
        setUnit("Metric");
    }
    function fahrenheit() {
        return (props.Metric * 9) / 5 + 32;
    }

    if (unit === "Metric") {
    return (
        <div className=""> 
            <span className="temperature"> {Math.round(props.Metric)}</span>
            <sup className="celcius">°C |</sup><sup><a href="/" onClick={Fahrenheit} className="celcius"> °F</a></sup>
        </div>
            );
    } else {
        return (
            <div className=""> 
            <span className="temperature"> {Math.round(fahrenheit())}</span>
            <sup ><a href="/" onClick={Celsius} className="celcius">°C</a></sup><sup className="celcius"> | °F</sup>
            </div>
        );
    }
    
} 