import React from 'react';

import Map from '../Common/Map';
import ContactForm from '../Common/ContactForm';
import Footer from './Footer';
import Intro from '../Common/Intro'
import InfoUtili from '../Common/InfoUtili'

class Info extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
          <>
            <Intro />
            <Map />
            <InfoUtili />
            <section className="email-me">
              <div classNAme="dm">
                <h3>Contatto diretto</h3>
              </div>
              <div className="appuntamento">
                <p>Contattami per una consulenza o per fissare un incontro!</p>
              </div>
              <hr></hr>
            </section>
            <ContactForm />
            <Footer />
          </>
        );
    }
}

export default Info;