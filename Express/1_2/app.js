const express = require("express");
const app = express();

app.get("/",(req,res)=>{
  res.send("Root Route");
})

app.get("/home",(req,res)=>{
  res.send("Home Route");
})
app.get("/about",(req,res)=>{
  res.send("Aboute Route");
})
app.get("/contact",(req,res)=>{
  res.send("Home Route");
})
app.get("*",(req,res)=>{
  res.send("404 NOT FOUND!!");
})

app.listen(4000);


