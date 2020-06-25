require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer")
const cors = require("cors");


const app = express()

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

app.use(express.static(`${__dirname}/dist`));

app.get("/*", (req, res) => res.sendFile(`${__dirname}/dist/index.html`));

app.post("/contact", (req, res) => {
    // console.log(req.body)
    res.set('Content-Type', 'application/json')
    const jsonData = JSON.stringify(req.body)
    res.status(201)
    res.json()
    const email = process.env.EMAIL_USER
    const pass = process.env.EMAIL_PASS
    const service = process.env.SERVICE
    const emailTo = process.env.EMAIL_TO

    const transporter = nodemailer.createTransport({
    service: service,
    secure: true,
    auth: {
        user: email,
        pass: pass,
    },
});

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
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
});

app.listen(process.env.PORT || 4000, () =>
    console.log(`Up and running on port ${process.env.PORT}`)
);

