var newNote = require("../db/db.json");
const uuidv4 = require("uuid/v4");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(newNote);
    });

    app.get("/api/notes/:note", function (req, res) {
        app.post("/api/notes", (req, res) => {
            const newNote = req.body;
            const file = path.join(__dirname, "../db/db.json");
            newNote.id = uuidv4();
            notesArray.push(newNote);
            fs.writeFile(file, JSON.stringify(notesArray, null, 4), err => {
                if (err) throw err;
                console.log("New note has been saved.");
            });
            res.send(newNote);
        });
        var selected = req.params.note;
        newNote(selected)
        res.json(true);
    });

    app.post("/api/notes", function (req, res) {
        newNote.push(req.body);
        res.json(true);
    });

    app.delete("/api/notes/:note", function (req, res) {
        var selected = req.params.note;
        newNote.pop(selected);
        res.json(true)
    })
};
