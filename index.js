require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// import "@babel/polyfill";

const app = express()

app.use(express.static(`${__dirname}/dist`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/contact', (req, res) => {
    console.log(req.body)

        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        function sendMail() {
            transporter.sendMail({
                name: req.body.name,
                to: process.env.EMAIL_USER,
                name: req.body.name,
                replyTo: req.body.email,
                subject: "New Message",
                text: req.body.message
            })

            .then(info => console.log("Email Sent", info))
            .catch(err => console.log(err))
        }
        sendMail();

})


app.get("/*", (req, res) => res.sendFile(`${__dirname}/dist/index.html`));

app.listen(process.env.PORT || 4000, () =>
    console.log(`Up and running on port ${process.env.PORT}`)
);

