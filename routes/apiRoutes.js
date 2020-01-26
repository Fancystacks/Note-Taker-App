var newNote = require("../db/db.json");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(newNote);
    });

    app.get("/api/notes/:note", function (req, res) {
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