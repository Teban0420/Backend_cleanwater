
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const adminController = require('../controllers/adminController');

// middle para proteger las rutas
const auth = require('../middeware/auth.js');

module.exports = function(){

    // rutas publicas
    router.get('/crear-usuario', usersController.FormUser);
    router.post('/crear-usuario', usersController.crearUser);
    

    // admin
    router.post('/login', adminController.autenticarAdmin);
    router.post('/crear-admin', adminController.crearAdmin);
    router.get('/all', auth, adminController.AllUsers);
    router.delete('/users/:id', auth, adminController.eliminarUser);
    router.put('/llamar_user/:id', adminController.llamarUser);

    return router;
}