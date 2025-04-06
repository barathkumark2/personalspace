"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const environment_1 = require("../../environment");
const config = {
    DB_Username: environment_1.envConfig.DB_Username,
    DB_password: environment_1.envConfig.DB_password,
    DB_name: environment_1.envConfig.DB_name,
    DB_Host: environment_1.envConfig.DB_Host,
    DB_dialect: environment_1.envConfig.DB_dialect
};
const seq = new sequelize_1.Sequelize(config.DB_name, config.DB_Username, config.DB_password, {
    host: config.DB_Host,
    dialect: config.DB_dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    },
    logging: false
});
exports.default = { config, seq };
//# sourceMappingURL=dbConfig.js.map