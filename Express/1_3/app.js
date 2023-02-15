const express = require("express");
const path = require("path");
const app = express();
app.get("/get-all-users",function(req,res){
  res.sendFile(path.join(__dirname,"user-data.json"))
})

app.listen(4000);