import React from 'react';

import Map from '../Common/Map';
import Footer from './Footer';

class Info extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                <Map />
                <h2 calssName='contattami'> Contattami </h2>
                <div className='info'>
                    <div className='indirizzo'>
                        <h3>Indirizzo</h3>
                        <p>Via Manin, 15</p>
                        <p>44042, Cento</p>
                        <p>Ferrara, FE</p>
                    </div>
                    <div className='orari'>
                        <h3>Orari</h3>
                        <p>Lun 08-23</p>
                        <p>Mar 08-23 </p>
                        <p>Mer 08-23</p>
                        <p>Gio 08-23</p>
                        <p>Ven 08-23</p>
                        <p>Sab 08-19</p>
                        <p>Dom CHIUSO</p>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Info;