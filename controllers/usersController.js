
const Agua_hogar = require('../models/Agua_hogar.js');
const Agua_proveniente = require('../models/Agua_proveniente.js');
const Casado = require('../models/Casado.js');
const Edad = require('../models/Edad.js');
const Personas_hogar = require('../models/Personas_hogar.js');
const Usuarios = require('../models/index.js');

exports.FormUser = async (req, res, next) => {

    const [agua_hogar, agua_proveniente, casado, edad, personas_hogar] = await Promise.all([
        Agua_hogar.findAll(),
        Agua_proveniente.findAll(),
        Casado.findAll(),
        Edad.findAll(),
        Personas_hogar.findAll(),
    ])


    res.json({ agua_hogar,
            agua_proveniente,
            casado,
            edad,
            personas_hogar
    });
 
}

// exports.llamadaUser = () => {

// }

// exports.eliminarUser = () => {

// }