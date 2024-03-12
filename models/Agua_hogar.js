
const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Agua_hogar = db.define('agua_hogar', {
    
    procedencia: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false
    }
});  

module.exports = Agua_hogar;