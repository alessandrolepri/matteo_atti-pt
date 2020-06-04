import React from 'react';
import { Link } from 'react-router-dom';

import logo from './images/matteo-card.png';

const Logo = () => {

    return (
        <Link to="/">
            <img className='logo' alt='Matteo Atti - PT' src={logo} />
        </Link>
    )
}

export default Logo;