import { Sequelize } from "sequelize";
import dbConfig from "../config/dbConfig.js";
const {seq: db} = dbConfig;

const user = db.define('user', {
    uid: {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps : false,
    freezeTableName: true,
    tableName : 'user',
}).schema('public');

export default user;