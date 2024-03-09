
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const adminController = require('../controllers/adminController');

module.exports = function(){

    // rutas publicas
    

    // admin

    router.post('/login', adminController.autenticarAdmin);
    router.post('/crear-admin', adminController.crearAdmin);

    return router;
}