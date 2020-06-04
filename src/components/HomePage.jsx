import React from 'react';
import { Link } from 'react-router-dom';

import homapageimg from '../images/hp1.jpg';


const HomePage = () => {

    return (
        <div className='homepage'>
        <img className='home' src={homapageimg} alt='Img broken' />
    <div className='matteo'>
        <h1> PERSONAL TRAINING </h1>
        <h2> FERRARA, EMILIA ROMAGNA </h2>
        <h4>
        Perdita di peso e trasformazioni dello stile di vita che creano risultati duraturi e ottimi per la salute, il corpo e la mente. 
        </h4>
        <Link to = "/aboutme" >
            <button> SCOPRI DI PIÙ </button> 
        </Link>
        <Link to='/contact'>
            <button>CONTATTAMI</button>
        </Link>
        </div>
    </div>
    )
}

export default HomePage;