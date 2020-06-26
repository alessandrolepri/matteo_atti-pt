import React, { Fragment } from 'react';

import health from '../images/health.jpeg';

const StepTwo = () => {

    return (
      <React.Fragment>
        <section className="consultation">
          <img className="health" src={health} alt="health" loading="lazy" />
          <div className="step1">
            <h2>FASE 2:</h2>
            <h4>VALUTAZIONE DELLA SALUTE & FITNESS TESTING</h4>
            <p>
              Prima di poter iniziare un programma di allenamento e
              nutrizionale, o almeno uno che sarà effettivamente efficace,
              eseguirò una serie di test per stabilire il tuo attuale stato di
              salute e fitness. Vedi che non esiste un progetto per la gestione
              del peso. Come devi allenarti e ciò che devi mangiare è diverso
              per tutti, anche se l&#39;obiettivo è lo stesso. Dipenderà dalla
              tua età, sesso, somatotipo (tipo di corpo) e stile di vita. Quindi
              ... come può qualcuno darti un programma nutrizionale ed esercizio
              fisico su misura (non un piano generale inutile) se non sanno
              nulla del tuo corpo? Come puoi monitorare gli effetti del tuo
              allenamento e dieta se non hai un benchmark? Ecco cosa mirerò a
              scoprire su di te:
              <ul>
                <li>Pulsazioni a riposo</li>
                <li>Pressione corporea a riposo</li>
                <li>Peso & Altezza</li>
                <li>
                  Composizione corporea(Massa grassa / Muscolo scheletrico /
                  Acqua)
                </li>
                <li>Metabolismo</li>
                <li>Allenamento cardio/respiratorio</li>
                <li>Recupero cardio/respiratorio</li>
                <li>Resistenza muscolare</li>
                <li>Forza muscolare</li>
                <li>Flessibilità</li>
                <li>Postura</li>
              </ul>
            </p>
          </div>
        </section>
      </React.Fragment>
    );
}

export default StepTwo;