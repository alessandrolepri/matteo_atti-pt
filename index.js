require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const transporter = require('./config/config')

const app = express()
app.use(express.static(`${__dirname}/dist`));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/*", (req, res) => res.sendFile(`${__dirname}/dist/index.html`));

app.post("/contact", (req, res) => {

  res.set('Content-Type', 'application/json')

  const emailTo = process.env.EMAIL_TO

  const output = `
    <h3>Hai un nuovo messaggio da ${req.body.name}</h3>
    <p>Email: ${req.body.email}</p>
    <p>Nome: ${req.body.name}</p>
    <p>Telefono: ${req.body.mobile}</p>
    <h4>Messaggio:</h4>
    <p>${req.body.message}</p>
  `

  const mailOptions = {
    from: req.body.name,
    email: req.body.email,
    replyTo: req.body.email,
    to: emailTo,
    subject: "Hai un nuovo messaggio",
    html: output
  }
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.status(500).send({
        success: false,
        message: "Errorre interno di server"
      });
    } else {
      res.send({
        success: true,
        message: "Messaggio inviato con successo"
      });
    }
  });

    const outputConfirmation = `
    <p>
    Ti ringrazio per avermi contattato. Ti prego di non rispondere a questa email. 
    Ti contatterò entro 48h al contatto che mi hai inviato. Grazie. Matteo Atti - Personal Trainer
    </p>
  `;

    const sendConfirmationEmail = {
      from: req.body.name,
      to: req.body.email,
      subject: "Messaggio ricevuto",
      html: outputConfirmation,
    };
    transporter.sendMail(sendConfirmationEmail, function(error, info) {
      if (error) {
        res.status(500).send({
          success: false,
          message: "Errorre interno di server",
        });
      } else {
        res.send({
          success: true,
          message: "Messaggio inviato con successo",
        });
      }
    });
});

app.listen(process.env.PORT || 4000, () =>
  console.log(`Up and running on port ${process.env.PORT}`)
);

module.exports = app