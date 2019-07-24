import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import weatherReports from './WeatherData';
import WeatherDay from './WeatherDay';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Directory from './Directory';


class Weather extends React.Component {

    state = {
        weather: weatherReports,
        test: 'test'
    }

    render() {
        return(
            <div>
              <h1 className="header"> Totally Fake Weather Report with React Router </h1>

              <div className="weather-row">
                {this.state.weather.map( weather => {
                    return <WeatherDay weather={weather}/>
                })}
              </div>
            <Directory props={this.state.weather}/>
            </div>
        )
    }
}

ReactDOM.render(<Weather />, document.getElementById('root'));