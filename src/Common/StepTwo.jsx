import React, { Fragment } from 'react';

import health from '../images/health.jpeg';

const StepTwo = () => {

    return (
        <React.Fragment>
                        <section className='consultation'>
                <img className='health' src={health} alt='health' />
                <div className='step1'>
                    <h2>
                        STEP 2:
                    </h2>
                    <h4> 
                        HEALTH ASSESSMENT & FITNESS TESTING
                    </h4>   
                    <p>
                        Before you can start a training and nutritional plan, or at least one that 's actually going to be effective, I will carry out a number of tests to establish your current state of health and fitness. You see there isn'
                        t a blueprint
                        for weight management.How you need to train and what you need to eat is different
                        for everyone, even
                        if the goal is the same.It&#39;s going to depend on your age, gender,
                        somatotype (body type) and lifestyle. So...how can someone possibly give you 
                        a bespoke nutritional and exercise programme (not a useless general plan) 
                        if they don&#39;t know anything about your body ? How can you track the effects
                        of your training and diet if you don&#39;t have a benchmark? 
                        Here is what I will aim to find out about you:
                        <ul>
                            <li>Resting Heart Rate</li>
                            <li>Resting Blood Pres</li>
                            <li>Height / Weight</li>
                            <li>Body Composition(Body fat / Skeletal muscle / Water)</li>
                            <li>Visceral Fat</li>
                            <li>BMR(Basic Metabolic Rate)</li>
                            <li>Cardiorespiratory fitness</li>
                            <li>Cardiorespiratory recovery rate</li>
                            <li>Muscular Strength</li>
                            <li>Muscular Endurance</li>
                            <li>Flexibility</li>
                            <li>Posture</li>
                        </ul>
                    </p>
                </div>
            </section>
        </React.Fragment>
    );
}

export default StepTwo;