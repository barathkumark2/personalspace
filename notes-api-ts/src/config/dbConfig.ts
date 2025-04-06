import { Sequelize, Dialect } from "sequelize";
import { envConfig } from "../../environment";

const config = {
    DB_Username : envConfig.DB_Username,
    DB_password: envConfig.DB_password,
    DB_name: envConfig.DB_name,
    DB_Host: envConfig.DB_Host,
    DB_dialect: envConfig.DB_dialect
};

const seq = new Sequelize(config.DB_name, config.DB_Username, config.DB_password, {
    host: config.DB_Host,
    dialect: config.DB_dialect as Dialect,
    pool: {
        max : 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }, 
    define: {
        timestamps: false
    },
    logging: false
});

export default{config, seq};