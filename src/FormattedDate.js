import React from "react";


export default function FormattedDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let date = props.date.getDate();
    let monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    let month = monthes[props.date.getMonth()];
    let hours = props.date.getHours();
        if (hours < 10) {hours = `0${hours}`;}
    let minutes = props.date.getMinutes();
        if (minutes < 10) {minutes = `0${minutes}`;}
    return (
        <div className="current-date">
            {day}, the {date}<sup className="st">st</sup> of {month}  {hours}:{minutes}
        </div>
    );
}