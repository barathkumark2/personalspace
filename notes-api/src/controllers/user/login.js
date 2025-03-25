import { createToken } from "../../services/auth/createToken.js";
import { getUserService } from "../../services/users/user.js";

const getUser = async (req, res) => {
    const user = await getUserService(req.body);
    if(user.data == true) {
        const token = createToken({"username" : req.body.username});
        res.send(token);
    } else {
        res.send("Unauthorized user");
    }
};

export {
    getUser
};