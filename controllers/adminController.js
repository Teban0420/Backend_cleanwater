
const Admin = require('../models/Admin.js');
const jwt = require('jsonwebtoken');

exports.crearAdmin = async (req, res, next) => {

    const { email, password } = req.body;
    const existeAdmin = await Admin.findOne({ where: {email}});

    if(existeAdmin){
        await res.status(400).json({msg: 'El usuario ya esta registrado'});
        next();
    }    
    
    const admin = await Admin.create({
        email,
        password
    });

    res.status(200).json({msg: 'Admin creado correctamente'});
}

exports.autenticarAdmin = async (req, res, next) => {
    
    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: {email} });   

    if(!admin){
        await res.status(401).json({msg: 'El usuario no existe'});
        next();
    }
    else{
        // el usuario existe verifico el password
        if(!admin.verificarPassword(password)){
            // password incorrecto
            await res.status(401).json({msg: 'Password Incorrecto'});
            next();
        }        
        else {
            // password correcto, firmar token
            const token = jwt.sign({
                email : admin.email,
                id: admin.id
            },
             'LLAVESECRETA',
             {
                expiresIn: '5h'
             });

             // retornar token
             res.json({token});
        }

    }
    
}