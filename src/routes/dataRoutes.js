import express from 'express';
import { database } from '../controllers/dataController.js';

const routes = (app) => {
    app.use(express.json());
    
    app.get('/data', database);
}

export default routes;