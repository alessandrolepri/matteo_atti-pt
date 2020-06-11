import React from 'react';
import { Link } from 'react-router-dom';


const ButtonToContact = () => {
    return (
        <Link to="/contact">
            <button className='btn-hp'>CONTATTAMI</button>
        </Link>
    )
}

export default ButtonToContact;