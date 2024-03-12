
const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Casado = db.define('casado', {
    
    nombre: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false
    }
});

module.exports = Casado;