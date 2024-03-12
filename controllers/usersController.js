
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

exports.crearUser = async (req, res, next) => {

    const {propietario, casado, edad, Personas_hogarId,  Agua_provenienteId, agua_hogar,
            reacciones_alergicas, nombre, celular, calidad_agua, direccion, zipcode} = req.body;

    const usuario = await Usuarios.create({
        propietario: propietario,
        calidad_agua: calidad_agua,
        reacciones_alergicas: reacciones_alergicas, 
        nombre: nombre,
        celular: celular,
        direccion: direccion,
        zipcode: zipcode,
        llamado: 0,
        agua_hogar: agua_hogar,
        Agua_provenienteId: Agua_provenienteId,
        CasadoId: casado,
        EdadId: edad,
        Personas_hogarId: Personas_hogarId,     

    })

    res.status(200).json({msg: 'Creado correctamente'})

}
// exports.llamadaUser = () => {

// }

// exports.eliminarUser = () => {

// }