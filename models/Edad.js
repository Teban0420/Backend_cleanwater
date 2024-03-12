
const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Edad = db.define('edad', {
    
    rango_edad: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false
    }
});

module.exports = Edad;