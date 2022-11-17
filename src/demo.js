import express from 'express';
import dotenv from 'dotenv';
import database from './config/mysql.config.js';
import QUERY from './query/patient.query.js';

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();


database.query(QUERY.SELECT_PATIENT_01,[1],(error, results) => {
    if (!results) {
        console.log("Data not found : ", error);
    } else {
        console.log(results);
    }
});


