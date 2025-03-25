import user from '../../models/users.js';

const createUserService = async(body) => {
    return await user.create({"username": body.username, "password" : body.password});
};

const getUserService = async(body) => {
    const response = await user.findOne({
        where : {"username": body.username, "password" : body.password}
    });
    if(response) {
        return true;
    } else {
        return false;
    }
}

export {
    createUserService,
    getUserService
};