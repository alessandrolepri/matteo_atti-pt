import React from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import './module.scss'

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';


class App extends React.Component {
    constructor() {
        super()
    };

    render() {
        return (
            <div>
        <BrowserRouter>
        <main>
            <NavBar />

            <Switch>
            <Route path="/aboutme" component={AboutMe} />
            { /* <Route path="/contact" component={Info} />
        <Route path="/service" component={Details} /> */ }
            <Route path="/" component={HomePage} />
            </Switch>

        </main>
        </BrowserRouter>
    </div>
        )
    };
}

ReactDOM.render(<App />, document.getElementById('root'));