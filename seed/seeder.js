const agua_hogar = require('./agua_hogar.js');
const agua_proveniente = require('./agua_proveniente.js');
const casado = require('./casado.js');
const edad = require('./edad.js');
const personas_hogar = require('./personas_hogar.js');

const db = require('../config/db.js');
const Agua_hogar = require('../models/Agua_hogar.js');
const Agua_proveniente = require('../models/Agua_proveniente.js');
const Casado = require('../models/Casado.js');
const Edad = require('../models/Edad.js');
const Personas_hogar = require('../models/Personas_hogar.js');


const importarDatos = async () => {
    try {
        // autenticar DB
        await db.authenticate()
        // generar las columnas
        await db.sync()
        // insertar los datos
        await Promise.all([
            Agua_hogar.bulkCreate(agua_hogar),
            Agua_proveniente.bulkCreate(agua_proveniente),
            Casado.bulkCreate(casado),
            Edad.bulkCreate(edad),
            Personas_hogar.bulkCreate(personas_hogar),
        ])
        console.log('datos importados correctamente')
        process.exit()
        
    } catch (error) {
        console.log(error)
        process.exit(1) // forma de terminar los procesos
    }
}

// funcion para eliminar datos
const eliminarDatos = async () => {
    
    try {
        // await Promise.all([
        //     Categoria.destroy({where: {}, truncate: true}),
        //     Precio.destroy({where: {}, truncate: true})
        // ])
        
        // otra forma de hacerlo
        await db.sync({force: true})
        console.log('datos eliminados correctamente');
        process.exit() // detengo el proceso
        
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}

if(process.argv[2] === '-i'){
    importarDatos();
}
if(process.argv[2] === '-e'){
    eliminarDatos();
}