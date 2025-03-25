import express from "express";
const app = express();
import { envConfig } from "./environment.js";
import routes from "./src/routes/index.js";
import config from "./src/config/dbConfig.js";
import users from "./src/models/user.js";
import teams from "./src/models/teams.js";
import notes from "./src/models/notes.js";
import bodyParser from 'body-parser';

app.get("/" , (req,res) => {
    res.send("This is home page");
});

app.use(bodyParser.json({ limit: '100mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

const db = config.seq;

try{
    await db.authenticate();
    console.log("Db connected successfully");
    await users.sync({});
    await teams.sync({});
    await notes.sync({});

} catch(error) {
    console.log("Failed to connect to db");
}

routes(app);

app.listen(envConfig.PORT, () => {
    console.log(`App is running on the port ${envConfig.PORT}`);
});