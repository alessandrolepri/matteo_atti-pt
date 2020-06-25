import React from 'react';

import coaching from '../images/coaching.png';

import ButtonToContact from './ButtonToContact';

const NutritionStep = () => {

    return (
        <>
        <section className="consultation">
        <img className="consult" src={coaching} alt="coaching" />
        <div className="step1">
            <h2>NUTRITION COACHING:</h2>
            <h4>A PARTIRE DA €35/MESE</h4>
            <p>
            Prima di iniziare il tuo viaggio di fitness prenoteremo una
            consulenza di 60 minuti, al telefono o nel mio studio privato,
            dove avremo l&#39;opportunità per parlare delle tue esigenze, dei
            tuoi obiettivi, delle abitudini di vita e della tua dieta e per
            noi stabilire se siamo in grado di lavorare insieme. Prescriverò
            il percorso migliore avanti per farti progredire e ottenere più di
            quanto tu credessi possibile.
            </p>
            <ButtonToContact />
        </div>
        </section>
    </>
    );
}

export default NutritionStep;