import React, { Fragment } from 'react';

import consultation from '../images/consultation.jpg';

const StepOne = () => {

    return (
      <React.Fragment>
        <section className="consultation">
          <img
            className="consult"
            src={consultation}
            alt="consultation"
            loading="lazy"
          />
          <div className="step1">
            <h2>FASE 1:</h2>
            <h4>CONSULTAZIONE GRATUITA</h4>
            <p>
              Prima di iniziare il tuo viaggio di fitness prenoteremo una
              consulenza di 60 minuti, al telefono o nel mio studio privato,
              dove avremo l&#39;opportunità di parlare delle tue esigenze, dei
              tuoi obiettivi, delle abitudini di vita e della tua dieta e di
              stabilire se è una buona idea lavorare insieme. Ti prescriverò il
              percorso migliore per farti progredire e raggiungere più di quanto
              credevi possibile.Prima di iniziare il tuo viaggio di fitness
              prenoteremo una consulenza di 60 minuti, al telefono o nel mio
              studio privato, dove avremo l&#39;opportunità di parlare delle tue
              esigenze, dei tuoi obiettivi, delle abitudini di vita e della tua
              dieta e di stabilire se è una buona idea lavorare insieme. Ti
              prescriverò il percorso migliore per farti progredire e
              raggiungere più di quanto credevi possibile.
            </p>
          </div>
        </section>
      </React.Fragment>
    );
}

export default StepOne;