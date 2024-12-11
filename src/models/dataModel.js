import connectToDatabase from '../config/dbConfig.js';

const data = await connectToDatabase(process.env.STRING_CONEXAO);

export async function getAllData() {

    return data;
}