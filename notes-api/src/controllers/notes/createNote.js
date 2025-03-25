import { createNoteService } from "../../services/notes/notes.js";

const createNote = (req, res) => {
    res.send(createNoteService(req.body.note));
};

export {
    createNote
};