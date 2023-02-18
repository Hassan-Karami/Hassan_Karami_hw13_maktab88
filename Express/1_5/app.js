const express = require("express");
const app = express();
const path = require("path");

 app.get("/page-1", (req, res) => {
   res.sendFile(path.join(__dirname, `./views/page-1.html`));
 });
  app.get("/page-2", (req, res) => {
    res.sendFile(path.join(__dirname, `./views/page-2.html`));
  });
   app.get("/page-3", (req, res) => {
     res.sendFile(path.join(__dirname, `./views/page-3.html`));
   });
    app.get("/page-4", (req, res) => {
      res.sendFile(path.join(__dirname, `./views/page-4.html`));
    });
     app.get("/page-5", (req, res) => {
       res.sendFile(path.join(__dirname, `./views/page-5.html`));
     });


app.listen(4000);
