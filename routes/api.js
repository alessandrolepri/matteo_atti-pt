// const express = require("express");
// const transporter = require("../config/config")

// const router = express.Router();


// // router.get("/*", (req, res) => res.sendFile(`${__dirname}/dist/index.html`));

// router.post("/contact", (req, res) => {
//   console.log(req.body);

//   res.set("Content-Type", "application/json");
//   res.status(201);
//   res.json({
//     msg: "EMAIL INVIATA",
//   });
//   const emailTo = process.env.EMAIL_TO;

//   const output = `
//     <h3>Hai un nuovo messaggio da ${req.body.name}</h3>
//     <p>Email: ${req.body.email}</p>
//     <p>Nome: ${req.body.name}</p>
//     <p>Telefono: ${req.body.mobile}</p>
//     <h4>Messaggio:</h4>
//     <p>${req.body.message}</p>
// `;

//   const mailOptions = {
//     from: req.body.name,
//     email: req.body.email,
//     replyTo: req.body.email,
//     to: emailTo,
//     subject: "Hai un nuovo messaggio",
//     html: output,
//   };
//   transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//       console.log(error);
//       res
//         .status(500)
//         .json({
//           msg:
//             "Errore interno. Riprova più tardi oppure contattami telefonicamente.",
//         });
//     }

//     return res.json({
//       msg: "Messaggio inviato con successo!!!"
//     })
//   });
// });

// module.exports = router