import React from 'react';

import mindset from '../images/mindset.png';
import apple from '../images/apple.png';
import brain from '../images/brain.png';
import style from '../images/style.png';
import weight from '../images/weight.png';
import test from '../images/test .png';


import Footer from '../components/Footer';


const Mindset = () => {
    return (
        <>
        <div>

        <section className='landing-page1'>
            <img className='mindset' 
            src={mindset} 
            width='100%' height='560px' />
            <div className='matteo'>
                <h2 className='training' style={{maxWidth:'400px'}}> MINDSET </h2>
            </div>
        </section>

        <section className='about-mindset'>
            <div className='mindset-info'>
            <h2> WHY MATTEO ATTI TRAINING WILL WORK FOR YOU </h2>
            <p> 
            A tonne of useful advice, guidance and coaching across the 4 keys to success that
            will​ help you: ​
            </p>
            <ul>
                <li>Eat better, without dieting or feeling deprived.</li>
                <li>Get active, no matter what shape you’re in now.</li>
                <li>Ditch the food rules, drop the fad diets and conflicting advice.</li>
                <li>Build fitness into your life, without it taking over.</li>
                <li>Achieve, and maintain, your goals, even when life gets busy.</li>
            </ul>
            </div>
            </section>

        <section className='approach-description'>
            <div className='nutritionig'>
            <img src={apple} />
            <h3>1. Nutrition</h3>
            < p > Learn about and implement nutritional strategies that will transform your physique without feeling starved. </p>
            </div>
            <div div className = 'nutritionig' >
            <img src={weight} />
            <h3>2. Exercise</h3>
            <p>Learn about and implement nutritional strategies that will transform your physique without feeling starved.</p>
            </div>
            <div className='nutritionig'>
            <img src={brain} />
            <h3>3. Mindset</h3>
            <p>Learn about and implement nutritional strategies that will transform your physique without feeling starved.</p>
            </div>
            <div className='nutritionig'>
            <img src={style} />
            <h3>4. Lifestyle</h3>
            <p>Learn about and implement nutritional strategies that will transform your physique without feeling starved.</p>
            </div>
        </section>
        <Footer />
        </div>
        </>
    )
}

export default Mindset;