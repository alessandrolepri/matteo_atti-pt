import React from 'react';
import { Link } from 'react-router-dom';

const MoreAboutMe = () => {
    return (
        <Link to="/aboutme">
            <button className='btn-hp'>SCOPRI DI PIÙ</button>
        </Link>
    )
}

export default MoreAboutMe;