import React from 'react';
import { Image } from 'semantic-ui-react';

import foto from '../images/foto.jpeg';
import health from '../images/health.jpeg';
import lifestyle from '../images/lifestyle.png';

import StepOne from '../Common/StepOne';
import StepTwo from '../Common/StepTwo';
import StepThree from '../Common/StepThree';
import Footer from './Footer';


const AboutMe = () => {
    return (
        <>

            <section className="det">
                <div className="header-about-me">
                    <div className="photo">
                        <Image src={foto} circular />
                    </div>
                    <div className="paragraph">
                        <h3 id="info-me">Matteo Atti, Personal Trainer & Nutrizionista </h3>
                        <h4></h4>
                    </div>
                </div>
            </section>

            <section className='my-step'>
                <h2> IL MIO SISTEMA DI SUCCESSO IN 8 FASI </h2>
                <h3>
                    Diventare un Personal Trainer è stata una scelta ovvia e naturale per me poiché
                    sono appassionato di vita sana e condivido la mia esperienza e conoscenza con le 
                    persone. Ho allenato persone impegnate quotidianamente in uno stile di vita sano e funzionale. 
                    La mia filosofia formativa è quella di incoraggiare, ispirare, 
                    educare e supportare i clienti per ottenere la migliore versione di se stessi, in 
                    modo progressivo, divertente, sicuro ed efficace. Sono specializzato nella gestione 
                    del peso corporeo (perdita di grasso e tonificazione muscolare).
                </h3>
                </section>
                <StepOne />
                <StepTwo />
                <StepThree />
                <Footer />

            </>

    );
}

export default AboutMe;