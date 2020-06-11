import React from 'react';

import coaching from '../images/coaching.png';

import ButtonToContact from './ButtonToContact';

const NutritionStep = () => {

    return (
        <>
                        <section className='consultation'>
                <img className='consult' src={coaching} alt='coaching' />
                <div className='step1'>
                    <h2>
                        NUTRITION COACHING:
                    </h2>
                    <h4> 
                        FROM £50/MONTH
                    </h4>   
                    <p>
                        Before starting your fitness journey we will book a 60 minute consultation, 
                        either over the phone or at my private studio, where we will get an opportunity
                        to talk about your needs, your goals, lifestyle habits and your diet and for us to
                        establish if we are a good fit to work together.I will prescribe the best path
                        forward for you to progress and achieve more than you thought possible.
                    </p>
                    <ButtonToContact />
                </div>
            </section>
        </>
    );
}

export default NutritionStep;