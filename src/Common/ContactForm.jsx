import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

import { Icon } from "semantic-ui-react";

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [result, setResult] = useState(null);

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post("/contact", { ...state })
      .then((response) => {
        setResult(response.data);
        setState({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Errore interno. Riprova più tardi oppure contattami telefonicamente.",
        });
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };
  

  return (
    <div>
      {result && (
        <p className={`${result.success ? "success" : "error"}`}>
          {result.message}
        </p>
      )}
      <form onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Nome & Cognome</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            placeholder="Inserisci il tuo nome"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={state.email}
            placeholder="Inserisci la tua email"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="mobile">
          <Form.Label>Cellulare</Form.Label>
          <Form.Control
            type="text"
            pattern="[0-9]*"
            name="mobile"
            value={state.mobile}
            placeholder="Cellulare"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Messaggio</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Scrivi il tuo messaggio **"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group className="privacy">
          <info>
            <p className="campi-obbligatori">Tutti i campi solo obbligatori</p>
          </info>
          <info>
            ** Inviando questo messaggio dichiaro di aver preso visione
            dell&#39;informativa sulla privacy resa ai sensi dell&#39;
            <a href="https://www.lavoro.gov.it/Documents/informativa_GDPR.pdf">
            art.13 del Regolamento UE 2016/679
            </a> e presto il consenso al trattamento dei miei dati personali.
          </info>
        </Form.Group>

        <Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={
              state.name.length < 1 ||
              state.message.length < 1 ||
              state.email.length < 1 ||
              state.mobile.length < 1
            }
          >
            <Icon name="paper plane" />
            INVIA
          </Button>
        </Form.Group>
      </form>
    </div>
  );
};

export default ContactForm;