
const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Agua_proveniente = db.define('agua_proveniente', {
    
    procedencia_agua: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false
    }
});

module.exports = Agua_proveniente;