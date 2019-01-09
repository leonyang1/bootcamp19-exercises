const express = require("express");
const path = require('path')
const app = express();
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.get("/food", (req, res) => {
  res.sendFile(path.join(__dirname + '/food.html'))
});

app.get("/pikachu", (req, res) => {
  res.sendFile(path.join(__dirname + '/pikachu.html'))
});

app.get("/onepunchman", (req, res) => {
  res.sendFile(path.join(__dirname + '/onepunchman.html'))
});


app.listen(3000);
console.log("Running at port 3000");
