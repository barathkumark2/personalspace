import { createUserService } from "../../services/users/user.js";

const createUser = (req, res) => {
    res.send(createUserService(req.body));
};

export {
    createUser
};