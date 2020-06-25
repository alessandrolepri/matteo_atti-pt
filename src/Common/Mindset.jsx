import React from 'react';

import mindset from '../images/mindset.png';

import MindsetApproach from './MindsetApproach'
import Footer from '../components/Footer';


const Mindset = () => {
    return (
      <>
        <div>
          <section className="landing-page1">
            <img className="mindset" src={mindset} width="100%" />
            <div className="matteo">
              <h2 className="training" style={{ maxWidth: "400px" }}>
                MINDSET
              </h2>
            </div>
          </section>

          <section className="about-mindset">
            <div className="mindset-info">
              <h2> ECCO PERCHÈ L&#39;ALLENAMENTO DI MATTEO ATTI FUNZIONA </h2>
              <p>
                Una tonnellata di consigli utili, orientamento e coaching
                attraverso le 4 chiavi del successo: ​
              </p>
              <ul>
                <li>Mangia meglio, senza dieta o sentendoti privato.</li>
                <li>
                  Diventa attivo, indipendentemente dalla forma in cui ti trovi
                  ora.
                </li>
                <li>
                  Abbandona le regole del cibo, lascia cadere le diete e
                  consigli contrastanti.
                </li>
                <li>
                  Costruisci la forma fisica nella tua vita, senza che prenda il
                  sopravvento.
                </li>
                <li>
                  Raggiungi e mantieni i tuoi obiettivi, anche quando la vita è
                  piena.
                </li>
              </ul>
            </div>
          </section>
          <MindsetApproach />
          <Footer />
        </div>
      </>
    );
}

export default Mindset;