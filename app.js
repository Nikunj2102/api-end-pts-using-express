var express = require('express');
var app = express();

app.get('/' , function(req,res){
  console.log(req.url);
  res.sendFile(__dirname + '/index.html');
});

app.get('/home' , function(req,res){
  console.log(req.url);
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact' , function(req,res){
  console.log(req.url);
  res.sendFile(__dirname + '/contact.html');
});

app.get('/:anything' , function(req,res){
  console.log(req.url);
  res.sendFile(__dirname + '/404.html');
});

app.listen(3000);
