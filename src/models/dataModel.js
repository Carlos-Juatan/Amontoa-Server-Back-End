import { connectToDatabase, insertOne } from '../config/dbConfig.js';

const data = await connectToDatabase(process.env.STRING_CONEXAO);

export async function getAllData() {

    return data;
}

export async function writeDataToDatabase(newdata) {
    const writedData = await insertOne(process.env.STRING_CONEXAO, newdata);
    return writedData;
}