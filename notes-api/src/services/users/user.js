import user from '../../models/users.js';
import { STATUS } from '../../utils/constants.js';

const createUserService = async(body) => {
    try{
        const response = await user.create({"username": body.username, "password" : body.password});
        return({status: STATUS.SUCCESS, message: "", data: response});
    } catch(error) {
        return({status: STATUS.FAILED, message : "", error: error.message});
    }
};

const getUserService = async(body) => {
    try{
        const response = await user.findOne({
            where : {"username": body.username, "password" : body.password}
        });

        if(response) {
            return({status: STATUS.SUCCESS, message: "", data: true});
        } else {
            return({status: STATUS.SUCCESS, message: "", data: false});
        }
    } catch(error) {
        return({status: STATUS.FAILED, message : "", error: error.message, data: false});
    }
}

export {
    createUserService,
    getUserService
};