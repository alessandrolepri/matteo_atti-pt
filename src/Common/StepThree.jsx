import React, { Fragment } from 'react';

import lifestyle from '../images/lifestyle.png';

const StepThree = () => {

    return (
        <React.Fragment>
            <section className='consultation'>
                <img className='consult' src={lifestyle} alt='consultation' />
                <div className='step1'>
                    <h2>
                        STEP 3:
                    </h2>
                    <h4> 
                        LIFESTYLE ASSESSMENT & PLAN
                    </h4>   
                    <p>
                        Did you know that 80% of your weight loss or weight management results 
                        come from the time you spend out of the gym?! Lets say you train at the gym 
                        4 times a week for 1 hour at a time, that amounts to less than 2% of your week.
                        Therefore, if you don&#39;t have a suitable plan for your time outside the gym then you 
                        are severely compromising your results.​
                        I go beyond the gym walls and ensure you are living a lifestyle that will help to get 
                        you into shape and feeling great!
                    </p>
                </div>
            </section>
        </React.Fragment>
    );
}

export default StepThree;