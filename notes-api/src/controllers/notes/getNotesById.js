import {getNotesByIdService} from '../../services/notes/notes.js';

const getNotesById = async(req, res) => {
    res.send(await getNotesByIdService(req.params.id));
}
export {
    getNotesById
}
