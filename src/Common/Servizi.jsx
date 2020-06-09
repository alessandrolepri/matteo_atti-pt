import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from 'react-router-dom';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Servizi</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Scegli un servizio</DropdownItem>
        <Link to='/'>
        <DropdownItem>Training</DropdownItem>
        </Link>
        <Link to="/training">
        <DropdownItem>Nutrition</DropdownItem>
        </Link>
        <DropdownItem>Mindset</DropdownItem>

      </DropdownMenu>
    </Dropdown>
  );
};

export default Example;
