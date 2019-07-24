import React from 'react';
import ReactDOM from 'react-dom';

const DailyWeather = ({props}) => {
    return(
        <div class="daily-weather">
            <h1> Day: {props.day}</h1>
            <h1> Weather: {props.weather} </h1>
            <h1> Temperature: {props.temp} </h1>
            <h1> Humidity: {props.humidity} </h1>
        </div>
    )
}

export default DailyWeather;