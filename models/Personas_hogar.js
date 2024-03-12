
const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Personas_hogar = db.define('personas_hogar', {
    
    cantidad: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false
    }
});

module.exports = Personas_hogar;