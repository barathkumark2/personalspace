"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const environment_1 = require("./environment");
const body_parser_1 = __importDefault(require("body-parser"));
const dbConfig_1 = __importDefault(require("./src/config/dbConfig"));
app.get("/", (req, res) => {
    res.send("This is home page");
});
app.use(body_parser_1.default.json({ limit: '100mb', extended: true }));
app.use(body_parser_1.default.urlencoded({ limit: '100mb', extended: true }));
const db = dbConfig_1.default.seq;
app.listen(environment_1.envConfig.PORT, () => {
    console.log(`App is running on the port ${environment_1.envConfig.PORT}`);
});
//# sourceMappingURL=index.js.map