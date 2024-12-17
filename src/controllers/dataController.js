import { getAllData, writeDataToDatabase } from "../models/dataModel.js";

export async function database (req, res) { 
    const data = await getAllData();
    res.status(200).json(data);
}

export async function writeData(req, res) {
    const newdata = req.body; // Assumindo que os dados a serem adicionados estão no corpo da requisição

    try {
        // Lógica para adicionar os novos dados ao JSON
        const createdPost = await writeDataToDatabase(newdata);
        res.status(201).json(createdPost);
    } catch (error) {
        console.error('Erro ao adicionar dados:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}