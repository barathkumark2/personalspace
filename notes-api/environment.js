import 'dotenv/config';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Sequelize } from 'sequelize';

const __filename = fileURLToPath(import.meta.url);
const dirNameUrl = path.dirname(__filename);

dotenv.config({
    path: path.resolve(dirNameUrl, `${process.env.NODE_ENV}.env`)
});


export const envConfig = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DB_name: process.env.DB_name,
    DB_password: process.env.DB_password,
    DB_Username: process.env.DB_Username,
    DB_Host: process.env.DB_Host,
    DB_dialect: process.env.DB_dialect
};