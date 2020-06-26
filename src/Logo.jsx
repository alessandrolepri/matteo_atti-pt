import React from 'react';
import { Link } from 'react-router-dom';

import logo from './images/matteo-card.png';

const Logo = () => {

    return (
      <Link to="/">
        <img
          className="logo-nav"
          alt="Matteo Atti - PT"
          src={logo}
          loading="lazy"
        />
      </Link>
    );
}

export default Logo;