import React, { Fragment } from 'react';

import consultation from '../images/consultation.jpg';

const StepOne = () => {

    return (
        <React.Fragment>
                        <section className='consultation'>
                <img className='consult' src={consultation} alt='consultation' />
                <div className='step1'>
                    <h2>
                        STEP 1:
                    </h2>
                    <h4> 
                        FREE CONSULTATION
                    </h4>   
                    <p>
                        Before starting your fitness journey we will book a 60 minute consultation, 
                        either over the phone or at my private studio, where we will get an opportunity
                        to talk about your needs, your goals, lifestyle habits and your diet and for us to
                        establish if we are a good fit to work together.I will prescribe the best path
                        forward for you to progress and achieve more than you thought possible.
                    </p>
                </div>
            </section>
        </React.Fragment>
    );
}

export default StepOne;