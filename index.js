var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var app = express(); 

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.get('/products', function(req, res) {
  fs.readFile('products.json', 'utf8', function(err, data) {
    var products = JSON.parse(data);
    console.log(products)
    res.render('products.ejs', { products: products})
  })
})

app.listen(8000);

console.log('http://localhost:8000')
