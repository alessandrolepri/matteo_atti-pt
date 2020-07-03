import React from 'react';
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

import * as serviceWorker from './serviceWorker'

import "@babel/polyfill";

import './module.scss'
import '../src/Style/homaPage.scss'
import '../src/Style/training.scss'
import '../src/Style/navbar.scss'
import '../src/Style/media.scss'
import '../src/Style/footer.scss'
import '../src/Style/contact.scss'
import '../src/Style/mindset.scss'
import '../src/Style/aboutme.scss'
import '../src/Style/nutrition.scss'
import '../src/Style/PersonalCredo.scss'
import '../src/Style/specialOffer.scss'
import '../src/Style/privacy.scss'


import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Info from './components/Info';
import Training from './components/Training';
import DropdownService from './Common/Servizi';
import Nutrition from './components/Nutrition';
import Mindset from './Common/Mindset';
import Privacy from './Privacy';
import Cookie from './cookie'


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
                    <NavBar
                      hideSidebar={this.handleSidebarHide}
                      handleShowClick={this.handleShowClick}
                    />

                    <Switch>
                      <Route path="/privacy" component={Privacy} />
                      <Route path="/aboutme" component={AboutMe} />
                      <Route path="/contact" component={Info} />
                      <Route path="/training" component={Training} />
                      <Route path="/nutrition" component={Nutrition} />
                      <Route path="/mindset" component={Mindset} />
                      <Route path="/servizi" component={DropdownService} />
                      <Route path="/" component={HomePage} />
                    </Switch>
                  </Sidebar.Pusher>
                </Sidebar.Pushable>
              </main>
            </BrowserRouter>
            <Cookie />
          </React.Fragment>
        );
    };
}

ReactDOM.render(<App />, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();