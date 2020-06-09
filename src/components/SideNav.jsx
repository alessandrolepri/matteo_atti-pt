import React from 'react'
import { Icon, Sidebar, Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

import Servizi from '../Common/Servizi';
import Logo from '../LogoSideNav';



class SideNav extends React.Component{
constructor(props){
    super(props)

    this.state={
    activeItem: 'home'
    }

    this.handleItemClick = this.handleItemClick.bind(this)
}



handleItemClick(e, { name }){
    this.setState({ activeItem: name })
    this.props.handleSidebarHide();
    if (name === "home") this.props.history.push("/");
    if (name === "aboutme") this.props.history.push("/aboutme");
    if (name === "contact") this.props.history.push("/contact");
}

render(){
    return(

    <Sidebar
        id='sidebar'
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={this.props.handleSidebarHide}
        vertical
        visible={this.props.visible}
        width='thin'>

        <div className='logo-sidenav'>
            <Logo />
        </div>
                
        <Menu.Item as='a'
        name='home'
        active={this.props.location.pathname === "/"}
        onClick={this.handleItemClick} >
        <Icon name='home' />
            Home
        </Menu.Item>

        <Menu.Item
        name='aboutme'
        active = {this.props.location.pathname === "/aboutme"}
        onClick={this.handleItemClick} >
        <Icon name='user'/>
        Su di Me
        </Menu.Item>

        <Menu.Item
        name='contact'
        active = {this.props.location.pathname === "/contact"}
        onClick={this.handleItemClick} >
        <Icon name='envelope'/>
        Contatti
        </Menu.Item>

        <Menu.Item as='a'>
        <Icon name='th' />
        <Servizi />
        </Menu.Item>

    </Sidebar>
    )
}

}

export default withRouter(SideNav)