import { ObjectId } from 'mongodb';
import connectToDatabase from '../config/dbConfig.js';

const connection = await connectToDatabase(process.env.uri);

export async function getAllData() {
    const db = connection.db('Amontoa');
    const collection = db.collection('links-main');
    return collection.find().toArray();
}

export async function writeDataToDatabase(newdata) {
    const db = connection.db('Amontoa');
    const collection = db.collection('links-main');
    return collection.insertOne(newdata);
}

export async function updateDadabase(id, newData) {
    const db = connection.db('Amontoa');
    const collection = db.collection('links-main');
    const objID = ObjectId.createFromHexString(id);
    return collection.updateOne({_id: new ObjectId(objID)}, {$push: {links: { $each: newData.links }}});
}