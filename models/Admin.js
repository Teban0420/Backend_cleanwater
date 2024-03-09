
const Sequelize = require('sequelize');
const bcryt = require('bcrypt');
const db = require('../config/db.js');

// defino el modelo
const Admin = db.define('admin', {
    
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'El usuario ya esta registrado'
        },
        validate: {
            isEmail: {
                msg: 'Email no valido'
            },
            notEmpty: {
                msg: 'El email no puede ir vacio'
            }
        }
    }, 
    password:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, { // encripto la contraseña
    hooks: {
        beforeCreate: async function(admin){
            const salt = await bcryt.genSalt(10);
            admin.password = await bcryt.hash( admin.password, salt);
        }
    }
});

Admin.prototype.verificarPassword = function(password){
    return bcryt.compareSync(password, this.password);
}

module.exports = Admin;