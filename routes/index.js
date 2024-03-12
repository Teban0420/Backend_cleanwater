
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const adminController = require('../controllers/adminController');

module.exports = function(){

    // rutas publicas
    router.get('/crear-usuario', usersController.FormUser);
    router.post('/crear-usuario', usersController.crearUser);
    

    // admin
    router.post('/login', adminController.autenticarAdmin);
    router.post('/crear-admin', adminController.crearAdmin);
    router.get('/all', adminController.AllUsers);

    return router;
}