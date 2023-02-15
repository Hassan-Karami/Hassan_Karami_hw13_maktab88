const express = require("express");
const app = express();
const path = require("path");

(() => {
  for (let i = 1; i <= 5; i++) {
    app.get(`/page-${i}`, (req, res) => {
      res.sendFile(path.join(__dirname, `./views/page-${i}.html`));
    });
  }
})();
app.listen(4000);
