"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
require("dotenv/config");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const dirNameUrl = __dirname;
dotenv_1.default.config({
    path: path_1.default.resolve(dirNameUrl, `${process.env.NODE_ENV}.env`)
});
exports.envConfig = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DB_name: process.env.DB_name,
    DB_password: process.env.DB_password,
    DB_Username: process.env.DB_Username,
    DB_Host: process.env.DB_Host,
    DB_dialect: process.env.DB_dialect
};
//# sourceMappingURL=environment.js.map