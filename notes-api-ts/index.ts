import express from "express";
const app = express();
import { envConfig } from "./environment";
import bodyParser from 'body-parser';
import config from "./src/config/dbConfig";

app.get("/" , (req,res) => {
    res.send("This is home page");
});

app.use(bodyParser.json({ limit: '100mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

const db = config.seq;

app.listen(envConfig.PORT, () => {
    console.log(`App is running on the port ${envConfig.PORT}`);
});