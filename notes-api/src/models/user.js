import { Sequelize } from "sequelize";
import dbConfig from "../config/dbConfig.js";
const {seq: db} = dbConfig;

const users = db.define('users', {
    uid: {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps : false,
    freezeTableName: true,
    tableName : 'user',
}).schema('public');

export default users;