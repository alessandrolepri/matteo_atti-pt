import React from 'react'

import MoreAboutMe from '../Common/MoreAboutMe'

class PersonalCredo extends React.Component {
    render() {
        return (
            <section className='personal-credo'>

            <h2>MATTEO PERSONAL TRAINING CREDO</h2>
            <p>Aiuto uomini e donne indaffarati a rivedere la loro salute e forma fisica usando una 
            combinazione di esercizi su misura, nutrizione, stile di vita e sistemi di mentalità che 
            sono olistici e sostenibili per sempre in modo che possano ...</p>
            <ul>
                <li>Sentiti sicuro e attraente con i loro amici, la famiglia e in pubblico</li>
                <li>Sentiti fisicamente e mentalmente forte, capace di affrontare qualsiasi sfida senza preoccuparti che i loro livelli di energia o peso corporeo si frappongano.</li>
                <li>Indossare gli abiti che vogliono indossare</li>
                <li>Smetti di preoccuparti di contrarre malattie e morire di giovane</li>
                <li>Correre in giro con i loro figli o nipoti, senza sentire dolore, senza fiato o stanco; e farlo di nuovo il giorno successivo</li>
                <li>Aggiungi 10+ anni di vita sana alla loro pensione</li>
            </ul>
            <p>Senza dover...</p>
            <ul>
                <li>Affamati - Nessuna dieta!</li>
                <li>Contare le calorie o pesare gli alimenti</li>
                <li>Rinuncia agli alimenti di cui godono</li>
                <li>Trascorrere ore a cucinare o allenarsi</li>
                <li>Condividi una palestra con gli altri</li>
            </ul>
            <MoreAboutMe />
            </section>
        )
    }
}


export default PersonalCredo