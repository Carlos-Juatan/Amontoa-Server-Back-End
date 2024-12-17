import fs from 'fs';

export async function connectToDatabase(stringConexao) {
    try {
        let rawdata = fs.readFileSync(stringConexao);
        let data = JSON.parse(rawdata);
        console.log("Sucesso ao se conectar com o json");

        return data;
    } catch (erro) {
        console.error('Falha na conexão com o json!', erro);
        process.exit();
    }
}

export async function insertOne(stringConexao, newData) {
    try {
        // Ler o conteúdo atual do JSON
        let rawdata = fs.readFileSync(stringConexao);
        let data = JSON.parse(rawdata);

        // Encontrar o grupo ou criar um novo
        const group = data.groups.find(g => g.nome === newData.nome);
        if (!group) {
            data.groups.push({
                nome: newData.nome,
                links: [newData.link]
            });
        } else {
            group.links.push({ 
                nome: newData.link.nome, 
                url: newData.link.url 
            });
        }

        // Escrever o novo JSON no arquivo
        fs.writeFileSync(stringConexao, JSON.stringify(data, null, 2));

        return data;
    } catch (erro) {
        console.error('Falha na conexão com o json!', erro);
        process.exit();
    }
}