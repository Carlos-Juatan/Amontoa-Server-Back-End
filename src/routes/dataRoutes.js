import express from 'express';
import cors from 'cors';
import { database, writeData } from '../controllers/dataController.js';

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
}

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));
    
    app.get('/data', database);

    app.post('/data', writeData);
}

export default routes;