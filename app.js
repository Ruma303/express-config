    const { configDotenv } = require('dotenv');
    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.listen(PORT);
    const morgan = require('morgan');

    //console.log(process.env.NODE_ENV);
    //console.log(app.get('env'));


    //, Abilitare moduli in determinati ambienti
    if (app.get('env') === 'development' || process.env.NODE_ENV === undefined) {
        app.use(morgan('dev'));
    }
    app.get('/', (req, res) => res.send('Home page'));


    //, dotenv
    /* require('dotenv').config();

    //# Utilizzo delle variabili di ambiente
    const dbHost = process.env.DB_HOST;
    const dbUser = process.env.DB_USERNAME;
    const dbPassword = process.env.DB_PASSWORD;
    console.log(dbHost, dbUser, dbPassword); */


    //, Gestire configurazioni differenti per ambiente
    /* const env = process.env.NODE_ENV || 'development';
    const envPath = `.env${ env === 'development' ? '' : '.' + env }`;

    require('dotenv').config({
        path: envPath
    });
    console.log(`File env caricato: ${envPath}`);
    const dbHost = process.env.DB_HOST;
    const dbUser = process.env.DB_USERNAME;
    const dbPassword = process.env.DB_PASSWORD;
    console.log(dbHost, dbUser, dbPassword); */


    //% Debug
    /* const debug = require('debug');
    const debugApp = require('debug')('app:generale');
    const debugDB = require('debug')('app:db');
    const debugHttp = require('debug')('app:http');

    debugApp('Messaggio di debug generico');
    debugDB('Debug del database');
    debugHttp('Debug HTTP in corso'); */

    /* (function startApp() {
        debug.enable("app:generale");
        debugApp('Avviamento dell\'applicazione...');
    })();

    (function queryDatabase() {
        debug.enable("app:db");
        debugDB('Esecuzione di una query sul database...');
    })();

    (function sendHttpRequest() {
        debug.enable("app:http");
        debugHttp('Invio di una richiesta HTTP...');
    })(); */




