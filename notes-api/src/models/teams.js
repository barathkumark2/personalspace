import { Sequelize } from "sequelize";
import dbConfig from "../config/dbConfig.js";
const {seq: db} = dbConfig;

const teams = db.define('teams', {
    uid: {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nid: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps : false,
    freezeTableName: true,
    tableName : 'teams',
}).schema('public');

export default teams;