import { getNotes } from "../controllers/notes/getNotes.js";
import {createNote} from "../controllers/notes/createNote.js";
import { getUserNotes } from "../controllers/notes/getUserNotes.js";
import { getNotesById } from "../controllers/notes/getNotesbyId.js";
import { createUser } from "../controllers/user/register.js";
import { getUser } from "../controllers/user/login.js";
import { authenticateToken } from "../middleware/auth/authenticateToken.js";
import { refreshAccessToken } from "../services/auth/refreshToken.js";


export default app => {
    app.post('/register', createUser);
    app.post('/login', getUser);
    app.post('/refresh-token', refreshAccessToken);
    app.get('/notes', authenticateToken,getNotes);
    app.get('/note/:id', authenticateToken, getNotesById);
    app.post('/note', authenticateToken, createNote);
}