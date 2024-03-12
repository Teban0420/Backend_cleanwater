const Agua_hogar = require('./Agua_hogar');
const Agua_proveniente = require('./Agua_proveniente');
const Casado = require('./Casado');
const Edad = require('./Edad');
const Personas_hogar = require('./Personas_hogar');
const Usuarios = require('./Usuarios');

Usuarios.belongsTo(Agua_hogar, {foreignKey: 'Agua_hogarId'});
Usuarios.belongsTo(Agua_proveniente, {foreignKey: 'Agua_provenienteId'});
Usuarios.belongsTo(Casado, {foreignKey: 'CasadoId'});
Usuarios.belongsTo(Edad, {foreignKey: 'EdadId'});
Usuarios.belongsTo(Personas_hogar, {foreignKey: 'Personas_hogarId'});

module.exports  = Agua_hogar;
module.exports  = Agua_proveniente;
module.exports  = Casado;
module.exports  = Edad;
module.exports  = Personas_hogar;
module.exports  = Usuarios;