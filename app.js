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
    const env = process.env.NODE_ENV || 'development';
    const envPath = `.env${ env === 'development' ? '' : '.' + env }`;

    require('dotenv').config({
        path: envPath
    });
    console.log(`File env caricato: ${envPath}`);
    const dbHost = process.env.DB_HOST;
    const dbUser = process.env.DB_USERNAME;
    const dbPassword = process.env.DB_PASSWORD;
    console.log(dbHost, dbUser, dbPassword);
