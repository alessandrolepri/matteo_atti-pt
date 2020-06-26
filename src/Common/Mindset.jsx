import React from 'react';

import mindset from '../images/mindset.png';

import MindsetApproach from './MindsetApproach'
import Footer from '../components/Footer';
import MindsetHeader from '../components/MindsetHeader';


const Mindset = () => {
    return (
      <>
        <div>
          <section className="landing-page1">
            <img className="mindset" src={mindset} width="100%" alt="mindset" />
            <div className="matteo">
              <h2 className="training" style={{ maxWidth: "400px" }}>
                MINDSET
              </h2>
            </div>
          </section>

          <MindsetHeader />
          <MindsetApproach />
          <Footer />
        </div>
      </>
    );
}

export default Mindset;