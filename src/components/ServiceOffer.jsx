import React from 'react'


import online from "../images/On-Demand-Training.jpg";


class ServiceOffer extends React.Component {
    render() {
        return (
            <section className='service-offer'>
            <div className='info-servizi'>
                <h2>I MIEI SERVIZI...</h2>
                <p>
                Offro un servizio completo che va ben oltre per farti entrare nella migliore forma 
                della tua vita e la sensazione di essere grandi, sia che tu sia un principiante assoluto, 
                sia che tu abbia raggiunto un plateau.
                </p>
            </div>
            <div className='opzioni'>
                <div className="offers">
                <img className="oneToOne" src={online} width="400px" />
                <div className="offer">
                    <h3>ALLENAMENTO</h3>
                    <p>
                    Revisione individuale della salute e dello stile di vita per le persone che hanno 
                    bisogno di maggiore responsabilità e assistenza per raggiungere i propri obiettivi.
                    </p>
                </div>
            </div>
            <div className="offers">
            <img className="oneToOne" src={online} width="400px" />
                <div className="offer">
                    <h3>NUTRIZIONE</h3>
                    <p>
                    Prendi una mano sulla tua nutrizione una volta per tutte con un nutrimento completo e un coaching abituale per assicurarti di rimanere in pista.
                    </p>
                    </div>
                </div>
            <div className="offers">
            <img className="oneToOne" src={online} width="400px" />
                <div className="offer">
                    <h3>MOTIVAZIONE</h3>
                    <p>
                    Trasforma la tua mentalità in appena 5 settimane - Stabilisci obiettivi significativi, 
                    cambia le tue abitudini, ottieni forza di volontà e aumenta la motivazione.
                    </p>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

export default ServiceOffer