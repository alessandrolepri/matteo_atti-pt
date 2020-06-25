import React, { useState } from "react";
import {
Dropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,
} from "reactstrap";
import { Link } from 'react-router-dom';

const MobileMenu = (props) => {
const [dropdownOpen, setDropdownOpen] = useState(false);

const toggle = () => setDropdownOpen((prevState) => !prevState);

return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>Servizi</DropdownToggle>
    <DropdownMenu>
        <DropdownItem header>Scegli un servizio</DropdownItem>
            <Link to='/training'>
            <DropdownItem isOpen={dropdownOpen} toggle={toggle}>Allenamento</DropdownItem>
            </Link>
            <Link to="/nutrition">
            <DropdownItem isOpen={dropdownOpen} toggle={toggle}>Nutrizione</DropdownItem>
            </Link>
            <Link to='/mindset'>
            <DropdownItem isOpen={dropdownOpen} toggle={toggle}>Mentalità</DropdownItem>
            </Link>
        </DropdownMenu>
    </Dropdown>
    );
};

export default MobileMenu;
