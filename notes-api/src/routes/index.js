import { getNotes } from "../controllers/getNotes.js";
import {createNote} from "../controllers/createNote.js";

export default app => {
    app.get('/notes', getNotes);
    app.post('/note', createNote);
}