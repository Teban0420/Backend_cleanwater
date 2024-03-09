
const express = require('express');
const routes = require('./routes');
const db = require('./config/db.js');
const bodyParser = require('body-parser');

//Cors 
const cors = require('cors');

// crear servidor
const app = express();

// conexion db
const conexionDB = async () => {
    try {
       await db.authenticate();   
       db.sync() // crea la tabla
       console.log('Conexion Correcta a la base de datos');
       
   } catch (error) {
       console.log(error);    
   }
}

conexionDB();

// habiliatar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar cors
// app.use(cors());
app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    
    next();
    
});

// rutas de la app
app.use('/', routes());

// puerto
app.listen(5000);