import React from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import './module.scss'

import NavBar from './components/NavBar';
import { HomePage } from './components/HomePage';


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
            <HomePage />

            { /*<Switch>
            <Route path="/aboutme" component={Aboutme} />
            <Route path="/contact" component={Info} />
            <Route path="/service" component={Details} />
            <Route path="/" component={Home} />
            </Switch> */}

        </main>
        </BrowserRouter>
    </div>
        )
    };
}

ReactDOM.render(<App />, document.getElementById('root'));