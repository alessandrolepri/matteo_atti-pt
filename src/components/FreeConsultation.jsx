import React from 'react'

class FreeConsultation extends React.Component {
    render() {
        return (
            <section className="free-consultation">
            <div className="newclient">
                <p className="client">Ai Nuovi Clienti</p>
                <p className="special-offer">Offerta</p>
                <p className="speciale">Speciale</p>
            </div>
            <div className="info-consultation">
                <h5>CONSULTAZIONE GRATUITA DAL VALORE DI €35</h5>
                <p>
                Fai il primo passo verso il successo richiedendo una consulenza
                sulla trasformazione GRATUITA. Parleremo delle tue esigenze, dei
                tuoi obiettivi, delle abitudini di vita, della tua dieta e
                stabiliremo se siamo in grado di lavorare insieme. Ti darò
                consigli attuabili su come puoi progredire con successo e
                ottenere più di quanto tu credessi possibile. Sono disponibili
                slot limitati poiché lavoro solo con un numero limitato di
                clienti alla volta, quindi ti preghiamo di compilare il modulo
                nel modo più dettagliato possibile e ti contatterò presto.
                </p>
            </div>
            </section>
        );
    }
}

export default FreeConsultation