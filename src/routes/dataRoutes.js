import express from 'express';
import cors from 'cors';
import { database, writeData, updateData } from '../controllers/dataController.js';

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
}

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));
    
    app.get('/data', database);

    app.post('/data', writeData);

    app.put('/upload/:id', updateData);
}

export default routes;