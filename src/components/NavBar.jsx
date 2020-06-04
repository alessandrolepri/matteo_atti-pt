import React from "react";
import { withRouter } from "react-router-dom";
import { Segment, Menu, Icon } from "semantic-ui-react";

import logo from '../images/matteo-card.png';

class Navbar extends React.Component {
    constructor() {
    super();

    this.state = {

        activeItem: "home",
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
    if (name === "home") this.props.history.push("/");
    if (name === "aboutme") this.props.history.push("/aboutme");
    if (name === "service") this.props.history.push("/service");
    if (name === "contact") this.props.history.push("/contact");
    }

    render() {
    const { activeItem } = this.state;

    return (
    <Segment inverted id="nav">
        <Menu stackable inverted pointing secondary>
        <img id="logo-navbar" src={logo} />
        <Menu.Menu position="right">
            <Menu.Item
            name="home"
            active={this.props.location.pathname === "/"}
            onClick={this.handleItemClick}
            >
            {" "}
            <Icon name="home" /> Home
            </Menu.Item>

            <Menu.Item
            name="aboutme"
            active={this.props.location.pathname === "/aboutme"}
            onClick={this.handleItemClick}
            >
            {" "}
            <Icon name="user" /> About Me
            </Menu.Item>

            <Menu.Item
            name="service"
            active={this.props.location.pathname === "/service"}
            onClick={this.handleItemClick}
            >
            {" "}
            <Icon name="th" /> Service
            </Menu.Item>

            <Menu.Item
            name="contact"
            active={this.props.location.pathname === "/contact"}
            onClick={this.handleItemClick}
            >
            {" "}
            <Icon name="envelope" /> Contact
            </Menu.Item>
        </Menu.Menu>
        </Menu>
    </Segment>
    );
}
}

export default withRouter(Navbar);

