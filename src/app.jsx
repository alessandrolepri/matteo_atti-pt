import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import {
    Segment,
    Sidebar
} from 'semantic-ui-react'

import './module.scss'

import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Info from './components/Info';
import Training from './components/Training';
import DropdownService from './Common/Servizi';
import Nutrition from './components/Nutrition';
import Mindset from './Common/Mindset';


class App extends React.Component {
    constructor(props) {
        super(props)

    this.state = {
        sidebarVisible: false,
    }

    this.handleShowClick = this.handleShowClick.bind(this)
    this.handleSidebarHide = this.handleSidebarHide.bind(this)
    }

    handleShowClick() {
        this.setState({
            sidebarVisible: true
        })
    }

    handleSidebarHide() {
        this.setState({
            sidebarVisible: false
        })
    }
    

    render() {
        return (
            <React.Fragment>
        <BrowserRouter>
        <main>
            <Sidebar.Pushable as={Segment}>
              <SideNav
                handleSidebarHide={this.handleSidebarHide}
                visible={this.state.sidebarVisible}
              />
              <Sidebar.Pusher>
                <NavBar hideSidebar={this.handleSidebarHide} handleShowClick={this.handleShowClick} />

            <Switch>
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/contact" component={Info} />
            <Route path="/training" component={Training} />
            <Route path='/nutrition' component={Nutrition} />
            <Route path='/mindset' component={Mindset} />
            <Route path = "/servizi" component={DropdownService} />
            <Route path="/" component={HomePage} />
            </Switch>
            </Sidebar.Pusher>
            </Sidebar.Pushable>
            </main>
        </BrowserRouter>
    </React.Fragment>
        )
    };
}

ReactDOM.render(<App />, document.getElementById('root'))