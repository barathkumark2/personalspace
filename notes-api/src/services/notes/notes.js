import notes from '../../models/notes.js';

const createNoteService = async(note) => {
    return await notes.create({"note":note});
}

const getNotesService = async() => {
    let response = await notes.findAll({
        attributes: [
            'note'
        ]
    });
    return response;
}

const getNotesByIdService = async(id) => {
    let response = await notes.findOne({
        where: {"nid" : id},
        attributes: [
            'note'
        ]
    });
    return response;
}

export {
    createNoteService,
    getNotesService,
    getNotesByIdService
}