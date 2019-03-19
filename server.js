// Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

 
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

// Sets the HTML routes in this file
require("./app/routing/htmlRoutes.js")(app);
// app.use('/', htmlRoutes);

// // Sets the API routes in this file
require("./app/routing/apiRoutes.js")(app);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
// Log (server-side) when our server has started
console.log("App listening on PORT: " + PORT);
});








