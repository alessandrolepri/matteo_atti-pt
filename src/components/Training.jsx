import React from 'react';

import gym from '../images/gym.jpg';
import semi_private from '../images/semi-private.jpeg';
import one_to_one from '../images/one-to-one.jpeg';
import online from '../images/On-Demand-Training.jpg';

import Footer from './Footer';
import ButtonToContact from '../Common/ButtonToContact';



const Training = () => {
    return (
      <div>
        <section className="landing-page">
          <img className="training-pic" src={gym} width="100%" height="560px" />
          <div className="matteo">
            <h2 className="training"> TRAINING </h2>
          </div>
        </section>
        <section className="training-offer">
          <div className="offers">
            <img className="private" src={online} width="400px" />
            <div className="offer">
              <h3>SEMI-PRIVATE</h3>
              <price>A PARTIRE DA €65/MESE</price>
              <p>
                Il Semi Private Coaching è l&#39;ideale se lavori di più e senti
                l&#39;allenamento più motivato con un amico e vuoi risparmiare
                enormemente sui costi di allenamento personale. Lavorerai
                attraverso il programma nutrizionale personalizzato che creo per
                te e ti eserciterai insieme al tuo partner per raggiungere i
                tuoi obiettivi di salute e fitness.
              </p>
              <ul>
                <li>Test mensili di salute e fitness</li>
                <li>Analisi e sistema nutrizionale</li>
                <li>Piano di integrazione</li>
                <li>Analisi e piano dello stile di vita</li>
                <li>Revisioni periodiche dei progressi</li>
              </ul>
            </div>
          </div>

          <div className="offers">
            <img className="on-demand" src={online} width="400px" />
            <div className="offer">
              <h3>ALLENAMENTO ONLINE</h3>
              <price>A PARTIRE DA €60/MESE</price>
              <p>
                Il coaching online è l&#39;ideale se preferisci allenarti a casa
                (o da remoto), ma desideri comunque tutti i vantaggi che la
                formazione personale ha da offrire, come sessioni individuali
                virtuali, nutrizione personalizzata e su misura e coaching sullo
                stile di vita.
              </p>
              <ul>
                <li>Test mensili di salute e fitness</li>
                <li>Analisi e sistema nutrizionale</li>
                <li>Piano di integrazione</li>
                <li>Analisi e piano dello stile di vita</li>
                <li>Revisioni periodiche dei progressi</li>
                <li>Motivatore</li>
                <li>Sessioni FACETIME / SKYPE individuali</li>
              </ul>
            </div>
          </div>

          <div className="offers">
            <img className="oneToOne" src={online} width="400px" />
            <div className="offer">
              <h3>ONE-TO-ONE</h3>
              <price>A PARTIRE DA €120/MESE</price>
              <p>
                Il coaching individuale è l&#39;ideale per te se hai bisogno di
                un approccio più personale al tuo allenamento, mentalità e
                nutrizione. Lavorerai con me personalmente nel mio studio
                privato per valutare la tua situazione attuale e insieme
                scopriremo modi rapidi, sicuri ed efficaci per aiutarti a
                bruciare, testardo grasso, sentirti più energico e raggiungere i
                tuoi obiettivi.
              </p>
              <ul>
                <li>Test mensili di salute e fitness</li>
                <li>Analisi e sistema nutrizionale</li>
                <li>Piano di integrazione</li>
                <li>Analisi e piano dello stile di vita</li>
                <li>Revisioni periodiche dei progressi</li>
                <li>Lezioni individuali</li>
                <li>Motivatore</li>
                <li>Sessioni FACETIME / SKYPE individuali</li>
                <li>Coaching per lo shopping alimentare</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="btn-training">
        <ButtonToContact />
        <hr></hr>
        </div>
        <Footer />
      </div>
    );
}

export default Training;