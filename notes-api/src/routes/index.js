import { getNotes } from "../controllers/notes/getNotes.js";
import {createNote} from "../controllers/notes/createNote.js";
import { getUserNotes } from "../controllers/notes/getUserNotes.js";
import { getNotesById } from "../controllers/notes/getNotesbyId.js";

export default app => {
    app.get('/notes', getNotes);
    app.get('/note/:id', getNotesById);
    app.get('/user-notes', getUserNotes);
    app.post('/note', createNote);
}