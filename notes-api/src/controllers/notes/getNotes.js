import {getNotesService} from '../../services/notes/notes.js';

const getNotes = async(req, res) => {
    const response = await getNotesService();
    res.send(response);
}
export {
    getNotes
}
