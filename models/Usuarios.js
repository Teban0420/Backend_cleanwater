
const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Usuarios = db.define('usuario', {
    
    propietario: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
    },
    calidad_agua: {
        type: Sequelize.DataTypes.INTEGER(2),
    },
    reacciones_alergias:{
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    nombre: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
    },
    celular: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false 
    },
    direccion:{
        type: Sequelize.DataTypes.STRING(80),
        allowNull: false 
    },
    zipcode: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false 
    },
    llamado: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    agua_hogar: {
        type: Sequelize.DataTypes.JSON      
    }

});

module.exports = Usuarios;