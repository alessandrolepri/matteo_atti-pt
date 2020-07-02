import React from 'react'
import { Image } from "semantic-ui-react";

import foto from '../images/foto.jpeg'


const Intro = () => {
  return (
    <section className="det">
      <div className="header-about-me">
        <div className="photo">
          <Image src={foto} circular />
        </div>
        <div className="paragraph">
          <h3 id="info-me">Matteo Atti, Personal Trainer & Nutrizionista </h3>
          <hr></hr>
          <h4></h4>
        </div>
      </div>
    </section>
  );
}

export default Intro