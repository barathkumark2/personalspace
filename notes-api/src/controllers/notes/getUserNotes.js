import {getNotesService} from '../../services/notes/notes.js';

const getUserNotes = async (req, res) => {
    const response = await getNotesService();
    return response;
}
export {
    getUserNotes
}
