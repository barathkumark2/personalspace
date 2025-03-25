import {getNotesByIdService} from '../../services/notes/notes.js';

const getNotesById = async(req, res) => {
    const response = await getNotesByIdService(req.params.id);
    res.send(response);
}
export {
    getNotesById
}
