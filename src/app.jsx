import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import './module.scss'

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Info from './components/Info';
import Details from './components/Details';


class App extends React.Component {
    constructor() {
        super()
    };

    render() {
        return (
            <React.Fragment>
        <BrowserRouter>
        <main>
            <NavBar />
        </main>

            <Switch>
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/contact" component={Info} />
            <Route path="/service" component={Details} />
            <Route path="/" component={HomePage} />
            </Switch>
        </BrowserRouter>
    </React.Fragment>
        )
    };
}

ReactDOM.render(<App />, document.getElementById('root'));