import express from 'express';
import routes from './src/routes/dataRoutes.js';

const app = express();
routes(app);

const PORT = 3000;
const HOST = '0.0.0.0'; // serve para o docker entender que não precisa rodar o servidor para acesso interno


app.listen(PORT, HOST, () => {
    console.log('Servidor escutando...');
});