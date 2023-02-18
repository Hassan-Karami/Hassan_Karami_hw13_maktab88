const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/page/:user", function (req, res, next) {
  res.sendFile(path.join(__dirname,`views/page-${req.params.user}.html`))
});
app.listen(4000);
