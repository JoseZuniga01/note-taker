
var path = require("path");

//HMTL routes:
module.exports = (app) => {
    //*this will return the notes HTML file
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/notes.html"));
    });
    //this will return the index html file
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });
};