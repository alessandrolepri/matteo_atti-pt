import React from "react";
import { withRouter } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

import Logo from '../Logo';
import Services from '../Common/Servizi';

class Navbar extends React.Component {
    constructor() {
    super();

    this.state = {
        visible: false,
        width: window.innerWidth,
        activeItem: 'home'
    }

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)

    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange)
    }

    handleWindowSizeChange() {
        this.setState({
            width: window.innerWidth
        })
    }

    handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
    if (name === "home") this.props.history.push("/");
    if (name === "aboutme") this.props.history.push("/aboutme");
    if (name === "contact") this.props.history.push("/contact");
    }

    render() {
    const { activeItem } = this.state;
    const isMobile = (this.state.width <= 500)

    return (
        <div>

        {isMobile &&

            <Menu inverted>
                <Menu.Item
                onClick={this.props.handleShowClick} >
                <Icon name='bars'/>
                </Menu.Item>
            </Menu>
        }

        {!isMobile &&
            <Menu inverted>
            <div className='logo'>
                <Logo />
            </div>

            <Menu.Menu position='right'>

            <Menu.Item
            name="home"
            active={this.props.location.pathname === "/"}
            onClick={this.handleItemClick}>
            <Icon name="home" /> Home
            </Menu.Item>

            <Menu.Item
            name="aboutme"
            active={this.props.location.pathname === "/aboutme"}
            onClick={this.handleItemClick}>
            <Icon name="user" /> Chi sono
            </Menu.Item>

            <Menu.Item>
            <Icon name ='th' />
            <Services />
            </Menu.Item> 

            <Menu.Item
            name="contact"
            active={this.props.location.pathname === "/contact"}
            onClick={this.handleItemClick}>
            <Icon name="envelope" /> Contatti
            </Menu.Item>
            </Menu.Menu>
        </Menu>
        }

        </div>
    )
}}

export default withRouter(Navbar)
