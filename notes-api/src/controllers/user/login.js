import { getUserService } from "../../services/users/user.js";

const getUser = async (req, res) => {
    const response = await getUserService(req.body);
    if(response == true) {
        res.send("Authorized user");
    } else {
        res.send("Unauthorized user");
    }
};

export {
    getUser
};