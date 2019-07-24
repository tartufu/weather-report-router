import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import DailyWeather from './components/DailyWeather'

class Directory extends React.Component {

    render() {
        return(
            <Router>
                <Switch>
                  <Route path ='/monday' render={() => <DailyWeather props={this.props.props[0]}/>}/>
                  <Route path ='/tuesday' render={() => <DailyWeather props={this.props.props[1]}/>}/>
                  <Route path ='/wednesday' render={() => <DailyWeather props={this.props.props[2]}/>}/>
                  <Route path ='/thursday' render={() => <DailyWeather props={this.props.props[3]}/>}/>
                  <Route path ='/friday' render={() => <DailyWeather props={this.props.props[4]}/>}/>
                  <Route path ='/saturday' render={() => <DailyWeather props={this.props.props[5]}/>}/>
                  <Route path ='/sunday' render={() => <DailyWeather props={this.props.props[6]}/>}/>
                </Switch>
            </Router>
        )
    }
}

export default Directory;