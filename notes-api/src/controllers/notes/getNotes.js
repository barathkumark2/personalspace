import {getNotesService} from '../../services/notes/notes.js';

const getNotes = async(req, res) => {
    res.send(await getNotesService(req.user.username));
}
export {
    getNotes
}
