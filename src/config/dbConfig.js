import fs from 'fs';

export default async function connectToDatabase(stringConexao) {
    try {
        let rawdata = fs.readFileSync('./database/links.json');
        let data = JSON.parse(rawdata);
        console.log("Sucesso ao se conectar com o json");

        return data;
    } catch (erro) {
        console.error('Falha na conexão com o json!', erro);
        process.exit();
    }
}