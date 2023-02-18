const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs/promises")
const userData = require("./user-data.json");
app.get("/get-all-users",function(req,res){
  res.send(userData)

})

//Admins 
app.get("/admins",(req,res)=>{
  (async ()=>{
     let info = await fs.readFile(path.join(__dirname, "user-data.json"));
    let admins = JSON.parse(info).filter((user) => user.role === "admin");
    res.send(userData);
  })();
})

app.listen(4000);