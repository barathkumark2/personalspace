import {getNotesService} from '../../services/notes/notes.js';

const getUserNotes = async (req, res) => {
    res.send(await getNotesService());
}
export {
    getUserNotes
}
