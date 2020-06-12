require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express()

app.use(express.static(`${__dirname}/dist`));

app.use(bodyParser.json());

// app.get("/*", (req, res) => res.sendFile(`${__dirname}/dist/index.html`));
app.get("*", function(req, res) {
  const index = path.join(__dirname, "build", "index.html");
  res.sendFile(index);
});

app.listen(process.env.PORT || 4000, () =>
    console.log(`Up and running on port ${process.env.PORT}`)
);
