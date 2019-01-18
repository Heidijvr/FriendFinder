// Dependencies
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()
var PORT = process.env.PORT || 3000;
 
app.get('/', function (req, res) {
  res.send('Hello World')
})


// Sets up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("App listening on PORT: " + PORT);
    });

// Requires and sets the HTML routes in this file
var htmlRoutes = require('./app/routing/htmlRoutes.js');
app.use('/', htmlRoutes);

// Requires and sets the API routes in this file
var apiRoutes = ('.app/routing/apiRouting.js');
app.use('/', apiRoutes);
