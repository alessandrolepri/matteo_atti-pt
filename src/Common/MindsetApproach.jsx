import React from 'react'

import apple from "../images/apple.png";
import brain from "../images/brain.png";
import style from "../images/style.png";
import weight from "../images/weight.png";


const MindsetApproach = () => {
    return (
      <section className="approach-description">
        <div className="nutritionig">
          <img src={apple} alt="apple" loading="lazy" />
          <h3>1. Nutrizione</h3>
          <p>
            Scopri e attua strategie nutrizionali che trasformeranno il tuo
            fisico senza sentirti affamato.
          </p>
        </div>
        <div div className="nutritionig">
          <img src={weight} alt="weight" loading="lazy" />
          <h3>2. Esercizio</h3>
          <p>
            Programma di esercizi su misura, strutturato, efficiente in termini
            di tempo e progressivo per soddisfare le vostre esigenze e
            obiettivi.
          </p>
        </div>
        <div className="nutritionig">
          <img src={brain} altr="brain" loading="lazy" />
          <h3>3. Mentalità</h3>
          <p>
            Applicando i principi della mentalità al tuo ardente desiderio di
            raggiungere i tuoi obiettivi, diventerai una versione migliore di
            te.
          </p>
        </div>
        <div className="nutritionig">
          <img src={style} alt="style" loading="lazy" />
          <h3>4. Stile di Vita</h3>
          <p>
            Scopri e attua le abitudini di vita vitali per iniziare a sentirti
            fantastico all&#39;interno e apparire alla grande all&#39;esterno.
          </p>
        </div>
      </section>
    );
}

export default MindsetApproach