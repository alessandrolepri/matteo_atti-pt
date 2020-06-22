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
                        <h3 id="info-me">Matteo Atti, Personal Trainer & Precision Nutrition </h3>
                        <h4></h4>
                    </div>
                </div>
            </section>

            <section className='my-step'>
                <h2> MY 8 STEP SUCCESS SYSTEM </h2>
                <h3>
                    Becoming a Personal Trainer was an obvious and natural choice
                    for me as I am passionate about healthy living and sharing my expertise 
                    and knowledge with people.
                    I worked for a number of corporate gyms as well as at an award winning world top 100 
                    hotel at the start of my career but I felt that I could give more value to my clients 
                    which went beyond the little time they spent at the gym.
                    As one of the youngest trainers to become freelance, I&#39;ve been coaching busy, 
                    everyday people in healthy lifestyle living for the last 8&nbsp;years.
                    My training ethos is to encourage, inspire, educate and support clients to achieve 
                    the best version of themselves, in a progressive, enjoyable, safe and effective
                    manner.
                    I specialise in weight management (Fat loss &amp; muscle toning).
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