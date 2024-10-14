const express = require('express');
const router = express.Router();
const Note = require('../models/NotesModel.js');

// Create a new Note
router.post('/notes', (req, res) => {
    if (!req.body.noteTitle) {
        return res.status(400).send({
            message: "Note title cannot be empty"
        });
    }

    const note = new Note({
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority,
        dateAdded: new Date(),
        dateUpdated: new Date()
    });

    note.save()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error creating note." }));
});

// Retrieve all Notes
router.get('/notes', (req, res) => {
    Note.find()
        .then(notes => res.send(notes))
        .catch(err => res.status(500).send({ message: err.message || "Error retrieving notes." }));
});

// Retrieve a single Note by ID
router.get('/notes/:noteId', (req, res) => {
    Note.findById(req.params.noteId)
        .then(note => {
            if (!note) return res.status(404).send({ message: "Note not found." });
            res.send(note);
        })
        .catch(err => res.status(500).send({ message: err.message || "Error retrieving note." }));
});

// Update a Note by ID
router.put('/notes/:noteId', (req, res) => {
    if (!req.body.noteTitle) {
        return res.status(400).send({ message: "Note title cannot be empty" });
    }

    Note.findByIdAndUpdate(req.params.noteId, req.body, { new: true })
        .then(note => {
            if (!note) return res.status(404).send({ message: "Note not found." });
            res.send(note);
        })
        .catch(err => res.status(500).send({ message: err.message || "Error updating note." }));
});

// Delete a Note by ID
router.delete('/notes/:noteId', (req, res) => {
    Note.findByIdAndRemove(req.params.noteId)
        .then(note => {
            if (!note) return res.status(404).send({ message: "Note not found." });
            res.send({ message: "Note deleted successfully!" });
        })
        .catch(err => res.status(500).send({ message: err.message || "Error deleting note." }));
});

module.exports = router;
