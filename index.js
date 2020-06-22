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

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: req.body.name,
            subject: "New Message",
            text: req.body.message
        }

        transporter.sendMail(mailOptions, function(error, info){
            if(error) {
                console.log(error)
            } else {
                console.log("Email sent: " + info.response)
            }
        })

})


app.get("/*", (req, res) => res.sendFile(`${__dirname}/dist/index.html`));

app.listen(process.env.PORT || 4000, () =>
    console.log(`Up and running on port ${process.env.PORT}`)
);

