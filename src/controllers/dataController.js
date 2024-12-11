import { getAllData } from "../models/dataModel.js";

export async function database (req, res) { 
    const data = await getAllData();
    res.status(200).json(data);
}