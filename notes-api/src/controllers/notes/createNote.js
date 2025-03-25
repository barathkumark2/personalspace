import { createNoteService } from "../../services/notes/notes.js";
import {STATUS} from "../../utils/constants.js";

const createNote = async(req, res) => {
    const randomValue = (new Date().getTime()).toString(36);
    const noteId =  'N' + randomValue;
    res.send(await createNoteService(req.body.note, req.user.username, noteId));
};

export {
    createNote
};