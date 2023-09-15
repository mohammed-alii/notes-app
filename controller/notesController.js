var generator = require("../utilities/generator");
var appStorage = require("../utilities/memory.storage");
var noteModel = require("../models/note.model");

exports.getAllNotes = function (req, res) {
  // var seqId = generator.generate();
  let keys = appStorage.getKeys(appStorage.notesAppStorage);
  let values = appStorage.getValues(appStorage.notesAppStorage);
  console.log(values)
  res.send(JSON.stringify(values));
};
exports.createNote = (req, res) => {
  let noteId = generator.generate()
  let title = req.body.title
  let content = req.body.content
  let createdBy = req.body.createdBy
  if (!title) {
    return res.status(500).send({error: 'title field is required'})
  } else if (!content) {
    return res.status(500).send({error: 'content field is required'})
  }
  const note = noteModel.note;
  let newNote = new note(noteId, title, content, createdBy , new Date);
  appStorage.notesAppStorage.setItem(noteId, newNote);
  return res.status(201).send(`note successfully added`)
};
exports.updateNote = function (req, res) {
  let noteId = req.body.id
  let title = req.body.title
  let content = req.body.content
  let createdBy = req.body.createdBy
  if (!noteId) {
    return res.status(500).send({error: 'id field is required'})
  }
  if (!content) {
    return res.status(500).send({error: 'content field is required'})
  }
  if (!title) {
    return res.status(500).send({error: 'title field is required'})
  }

  let selectedNote = appStorage.notesAppStorage.getItem(noteId);
  if (!selectedNote) {
    return res.status(404).send({error: 'note selected not found'})
  }

  const note = noteModel.note;
  let newNote = new note(noteId, title, content, createdBy , new Date);
  appStorage.notesAppStorage.setItem(noteId, newNote);
  return res.status(200).send(`note successfully updated`)
};
exports.deleteNote = function (req, res) {
  noteId = req.params.id;
  if (!noteId) {
    return res.status(500).send({error: 'id field is required'})
  }
  let selectedNote = appStorage.notesAppStorage.getItem(noteId);
  if (!selectedNote) {
    return res.status(404).send({error: 'note selected not found'})
  }
  appStorage.notesAppStorage.removeItem(noteId)
  return res.status(200).send("Note deleted");
};
