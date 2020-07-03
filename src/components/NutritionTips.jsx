import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

import mix from '../images/mix .jpg'
import veg from '../images/vegs.jpg'

const NutritionTips = () => {
  return (
    <>
      <section className="my-step">
        <h2>
          È importante che il Personal Trainer fornisca consigli nutrizionali?
        </h2>
      </section>
      <Segment>
        <Image src={veg} size="large" floated="left" />
        <p>
          Chiedi a qualsiasi personal trainer e se sono a basso contenuto di
          carboidrati, cheto, dieta carnivora o vegano, ti diranno che gli
          addominali sono fatti in cucina, non in palestra. Questo perché la
          nutrizione è un fattore enorme quando si tratta di perdita di grasso
          costante e sicura. Tanto che sulla maggior parte delle piramidi di
          perdita di grasso, l&#39;esercizio fisico non è quasi mai la più
          grande variabile e talvolta l&#39;esercizio fisico non è affatto una
          variabile.
        </p>
        <Image src={mix} size="large" floated="right" />
        <p>
          Quindi cosa deve fare un personal trainer quando tutta la ricerca e la
          scienza indicano ciò che metti in bocca come più importante di quanto
          velocemente e lontano puoi correre per perdere grasso? Ci sono alcuni
          motivi per cui è fondamentale che tu come personal trainer possa
          fornire consigli nutrizionali informativi. Prima di tutto, molti
          clienti si aspettano che tu sappia le risposte a molte domande
          relative all&#39;alimentazione, alcune addirittura possono chiedere
          piani dietetici. Non puoi estrarre queste informazioni dal nulla
          perché i tuoi suggerimenti potrebbero avere un impatto negativo sul
          cliente. Soprattutto se hanno esigenze o allergie specifiche.
        </p>
        <p>
          D&#39;altra parte, vorrai che i tuoi clienti ottengano i migliori
          risultati possibili mentre lavorano con te. Ciò significa che al di
          fuori delle 2-4 ore settimanali che stai con loro, hanno bisogno di
          mangiare la giusta quantità e una varietà di alimenti che supportano i
          loro obiettivi di fitness e il regime di esercizio che prescrivi.
          Saper allenare i tuoi clienti a seguire nuove abitudini alimentari e
          consigliarli su calorie, macronutrienti e controllo delle porzioni è
          essenziale indipendentemente dalla natura del loro obiettivo.
          Indipendentemente dal fatto che siano in perdita di peso o in un
          viaggio di body building, ciò che accade nel loro corpo avrà un
          impatto sul loro successo. Il tuo compito è far loro capire questo e
          aiutarli a cambiare il loro stile di vita.
        </p>
        <p>
          Il coaching nutrizionale con me sembra diverso per tutti. Proprio come
          con l&#39;esercizio, aiuto i miei clienti a scoprire quale approccio
          funziona meglio per loro. Forse il tuo più grande ostacolo è sapere
          cosa mangiare? Forse hai problemi con le porzioni e l&#39;eccesso di cibo?
          Forse la tua dieta è ok ma i livelli di stress e il sonno influenzano
          i tuoi progressi? Dato che tutti abbiamo difficoltà diverse,
          l&#39;approccio a una sola misura non è sempre il massimo, il mio compito
          è scoprire dove si lotta e aiutarvi ad avere successo.
        </p>
      </Segment>
    </>
  );
}

export default NutritionTips