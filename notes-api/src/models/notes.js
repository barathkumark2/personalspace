import { Sequelize } from "sequelize";
import dbConfig from "../config/dbConfig.js";
const {seq: db} = dbConfig;

const notes = db.define('notes', {
    nid: {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    note: {
        type: Sequelize.TEXT
    }

}, {
    timestamps : false,
    freezeTableName: true,
    tableName : 'notes',
}).schema('public');

export default notes;