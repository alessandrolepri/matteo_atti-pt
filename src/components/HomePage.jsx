import React from 'react';

import Footer from './Footer';
import ButtonToContact from '../Common/ButtonToContact';
import MoreAboutMe from '../Common/MoreAboutMe';
import MindsetApproach from '../Common/MindsetApproach'
import PersonalCredo from './PersonalCredo'
import FreeConsultation from './FreeConsultation'
import ServiceOffer from './ServiceOffer'
import MindsetHeader from './MindsetHeader';


import homapageimg from '../images/hp1.jpg';
import mobileCard from '../images/matteo-card.png'

const HomePage = () => {

    return (
    <div>
    <section className="landing-page">
    <img className="home" src={homapageimg} alt="Img broken" />
    <img className="home-mobile" src={mobileCard} width="100%" alt="Immagine rotta" />
        <div className="matteo">
            <h1> PERSONAL TRAINING </h1>
            <h2> FERRARA, EMILIA ROMAGNA </h2>
            <h4>
            Perdita di peso e trasformazioni dello stile di vita che creano risultati
            duraturi e ottimi per la salute, il corpo e la mente.
            </h4>
            <div className='hp-btn-link'>
            <MoreAboutMe />
            <ButtonToContact />
            </div>
        </div>
    </section>
    <MindsetHeader />
    <MindsetApproach />
    <PersonalCredo />
    <FreeConsultation />
    <ServiceOffer />
    <Footer />
    </div>

    )
}

export default HomePage;