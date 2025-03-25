import { getNotes } from "../controllers/notes/getNotes.js";
import {createNote} from "../controllers/notes/createNote.js";
import { getUserNotes } from "../controllers/notes/getUserNotes.js";
import { getNotesById } from "../controllers/notes/getNotesbyId.js";
import { createUser } from "../controllers/user/register.js";
import { getUser } from "../controllers/user/login.js";


export default app => {
    app.post('/register', createUser);
    app.post('/login', getUser);
    app.get('/notes', getNotes);
    app.get('/note/:id', getNotesById);
    app.get('/user-notes', getUserNotes);
    app.post('/note', createNote);
}