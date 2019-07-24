import React from 'react';
import ReactDOM from 'react-dom';

const WeatherDay = ({weather}) => {

    let weatherIcon;

    if (weather.weather === 'sunny') {
        weatherIcon = <i className="fas fa-sun fa-6x"></i>;
    } else if (weather.weather === 'rainy'){
        weatherIcon = <i className="fas fa-cloud-rain fa-6x"></i>;
    } else if (weather.weather === 'cloudy') {
        weatherIcon = <i className="fas fa-cloud-sun fa-6x"></i>
    } else {
        weatherIcon = <i className="fas fa-radiation-alt fa-6x"></i>
    }

    return(
        <div className="weather-day">
          <h2> {weather.day} </h2>
          <a href={"/" + weather.day}> {weatherIcon} </a>
        </div>
    )
}

export default WeatherDay;

          // <h2> {weather.weather}</h2>
          // <h2> {weather.temp}</h2>
          // <h2> {weather.humidity}</h2>