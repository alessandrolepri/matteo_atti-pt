import React from "react";
import { Icon, Header } from "semantic-ui-react";

const InfoUtili = () => (
  <>
    <section className="info-utile">
      <div className="mobile">
        <Icon name="phone" />
        <Header as="h2" content="+39 123 45567890" />
      </div>
      <div className="email">
        <Icon name="mail" />
        <a href="mailto:test@test.com">
        <Header as="h2" content="test@test.com" />
        </a>
      </div>
    </section>
    <section className="mi-trovi-qui">
      <div>
        <Header
          as="p"
          content= "Mi trovi alla palestra Oasi Welness - Via Manin, 15 Cento (FE). Ricevo su appuntamento dal lunedì al venerdì."
        />
      </div>
    </section>
  </>
);

export default InfoUtili;
