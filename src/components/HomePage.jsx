import React from 'react';
import { Link } from 'react-router-dom';

import homapageimg from '../images/hp1.jpg';


const HomePage = () => {

    return (
        <div className='homepage'>
        <img className='home' src={homapageimg} alt='Img broken' />
    <div className='matteo'>
        <h1> PERSONAL TRAINING </h1>
        <h2> IN LANCING, WEST SUSSEX </h2>
        <h4>Premium weight loss and lifestyle transformations which create long lasting, dramatic results to your health, body & mind.</h4>
        <Link to = "/aboutme" >
            <button> ESPLORA </button> 
        </Link>
        <Link to='/contact'>
            <button>CONTATTI</button>
        </Link>
        </div>
    </div>
    )
}

export default HomePage;