var express = require('express');
const router = express.Router()
var allNotesCtrl = require('../controller/notesController')

router.get('/notes', allNotesCtrl.getAllNotes);
router.post('/notes/create', allNotesCtrl.createNote);
router.put('/notes/update', allNotesCtrl.updateNote);
router.delete('/notes/delete/:id', allNotesCtrl.deleteNote);

module.exports = router;