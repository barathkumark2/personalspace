import express from "express";
const app = express();
import { envConfig } from "./environment.js";
import routes from "./src/routes/index.js";
import config from "./src/config/dbConfig.js";
import user from "./src/models/user.js";
import teams from "./src/models/teams.js";
import notes from "./src/models/notes.js";

app.get("/" , (req,res) => {
    res.send("This is home page");
});

const db = config.seq;

try{
    await db.authenticate();
    console.log("Db connected successfully");
    await user.sync({});
    await teams.sync({});
    await notes.sync({});

} catch(error) {
    console.log("Failed to connect to db");
}

routes(app);

app.listen(envConfig.PORT, () => {
    console.log(`App is running on the port ${envConfig.PORT}`);
});