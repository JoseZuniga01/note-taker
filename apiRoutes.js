const fs = require("fs");

//API routes
module.exports = (app) => {
    //* GET api notes and read form DB file to return as a JSON.
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    app.get("/api/notes", (req, res) => {
        return res.json(noteList);
    });

    //  add new saved npote to dbjson 
    app.post('/api/notes', (req, res) => {
        let lastId;
        if (noteList.length) {
            lastId = Math.max(...(noteList.map(note => note.id)));
        } else {
            lastId = 0;
        }
        const id = lastId + 1;
        noteList.push({ id, ...req.body });
        //to remove last index added
        res.json(noteList.slice(-1));
    });

    // Delete function
    app.delete('/api/notes/:id', (req, res) => {
        //converts string in json and indetifies it with ID 
        let findNote = noteList.find(({ id }) => id === JSON.parse(req.params.id));
        noteList.splice(noteList.indexOf(findNote), 1);
        res.end("Note is deleted");
    });
};