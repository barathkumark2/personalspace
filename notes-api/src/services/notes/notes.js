import notes from '../../models/notes.js';
import { STATUS } from '../../utils/constants.js';

const createNoteService = async(note, username, noteId) => {
    try {
        const response = await notes.create({"note":note, "username": username, "noteId" : noteId});
        return({status: STATUS.SUCCESS, message: "", data: response});
    } catch(error) {
        return({status: STATUS.FAILED, message : "", error: error.message});
    }
}

const getNotesService = async(username) => {
    try {
        const response = await notes.findAll({
            where:{username},
            attributes: [
                'note'
            ]
        });
        return({status: STATUS.SUCCESS, message: "", data: response});
    } catch(error) {
        return({status: STATUS.FAILED, message : "", error: error.message});
    }
}

const getNotesByIdService = async(id) => {
    try{
        let response = await notes.findOne({
            where: {"nid" : id},
            attributes: [
                'note'
            ]
        });
        return({status: STATUS.SUCCESS, message: "", data: response});
    } catch(error) {
        return({status: STATUS.FAILED, message : "", error: error.message});
    }
}

export {
    createNoteService,
    getNotesService,
    getNotesByIdService
}