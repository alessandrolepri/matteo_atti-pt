import React from "react";
import axios from "axios";


import { Icon } from "semantic-ui-react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/contact",
      data: this.state,
    })
      .then(() => console.log("Email sent"))
      .catch((err) => console.log(err, "ERROR OCCUR"));
  }

  handleResetForm = () => {
    setTimeout(() => {
      this.setState({ name: "", email: "", mobile: "", message: "" });
    }, 1000);
  };

  render() {
    return (
      <div className="Contact-form">
        <form
          id="contact-form"
          method="POST"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <div className="form-group">
            <label htmlFor="name">Nome e Cognome</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Indirizzo Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Telefono</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              value={this.state.mobile}
              onChange={this.onMobileChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Messaggio</label>
            <textarea
              className="form-control"
              rows="5"
              placeholder="Lasciami un breve messaggio con le tue domande ed i tuoi obiettivi e ti risponderò al più presto"
              id="message"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={this.handleSubmit.bind(this)}
            onClick={this.handleResetForm}
          >
            <Icon name="paper plane" />
            Invia
          </button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMobileChange(event) {
    this.setState({ mobile: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ContactForm;
