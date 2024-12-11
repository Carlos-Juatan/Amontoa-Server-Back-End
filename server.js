import express from 'express';
import routes from './src/routes/dataRoutes.js';

const app = express();
routes(app);

app.listen(3000, () => {
    console.log('Servidor escutando...');
});