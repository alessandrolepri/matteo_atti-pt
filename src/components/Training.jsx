import React from 'react';

import hero from '../images/hp1.jpg';
import semi_private from '../images/semi-private.jpeg';
import one_to_one from '../images/one-to-one.jpeg';
import online from '../images/On-Demand-Training.jpg';

import Footer from './Footer';



const Training = () => {
    return (
        <div>
        <section className='landing-page'>
            <img className='training-pic' 
            src={hero} 
            width='100%' height='560px' />
            <div className='matteo'>
                <h2 className='training'> TRAINING </h2>
            </div>
        </section>

        <section className='training-offer'>
            <div className='semi-private'>
                <img className = 'private' src={online} width='400px' />
                <h3>SEMI-PRIVATE</h3>
            </div>

            <div className='online'>
                <img className='on-demand' src={online} width='400px' />
                <h3>ONLINE TRAINING</h3>
            </div>

            <div className='one-to-one'>
                <img className = 'oneToOne' src={online} width='400px' />
                <h3>ONE-TO-ONE</h3>
                <price>FROM £192/MONTH</price>
                <p> 
                All plans start with a consultation followed by an initial one month
                commitment, after which there is the opportunity to make longer commitments and 
                save money 
                </p>
                <p>
                Semi Private Coaching is ideal if you work harder and feel more motivated training with a friend and want to make huge savings on personal training costs. You will work through the individualised nutrition program I create for you, and exercise alongside your partner to accomplish your health and fitness goals.
                </p>
            </div>

        </section>
        <Footer />
        </div>
    )
}

export default Training;