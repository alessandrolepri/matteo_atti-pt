import React from 'react';

import lifestyle from '../images/lifestyle.png';

const StepThree = () => {

    return (
      <React.Fragment>
        <section className="consultation">
          <img
            className="consult"
            src={lifestyle}
            alt="consultation"
            loading="lazy"
          />
          <div className="step1">
            <h2>FASE 3:</h2>
            <h4>VALUTAZIOE E PIANO DELLO STILE DI VITA</h4>
            <p>
              Lo sapevi che l&#39;80% della tua perdita di peso o dei risultati
              di gestione del peso vieni dal tempo che passi fuori dalla
              palestra ?! Diciamo che ti alleni in palestra 4 volte a settimana
              per 1 ora alla volta, pari a meno del 2% della settimana.
              Pertanto, se non hai un piano adatto per il tuo tempo fuori dalla
              palestra, allora tu stanno compromettendo gravemente i tuoi
              risultati. Vado oltre le pareti della palestra e ti assicuro che
              stai vivendo uno stile di vita che ti aiuterà a ottenere ti forma
              e ti senti benissimo!
            </p>
          </div>
        </section>
      </React.Fragment>
    );
}

export default StepThree;