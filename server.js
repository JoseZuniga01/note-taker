const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

//grabs public file from CSS
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./'));
app.use(express.json());

//api and html route files required  
require("./htmlRoutes");
require("./apiRoutes");

// begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});