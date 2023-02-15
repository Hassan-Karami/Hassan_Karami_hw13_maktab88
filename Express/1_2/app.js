const express = require("express");
const app = express();
function userRequest(route){
  if(typeof(route) !== "string"){
    return console.log("invalid route ")
}
app.get(route,function(req,res){
  if(route === "/about") res.send("About Route");
  else if (route === "/home") res.send("Home Route");
  else if (route === "/contact") res.send("Contact Route");
  else if(route === "/") res.send("Root Route");
  else if(route === "*") res.send("Not Found");
})
}
userRequest("/");
userRequest("/home");
userRequest("/about");
userRequest("/contact");
userRequest("*");

app.listen(4000);


