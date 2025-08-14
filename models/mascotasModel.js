import dbClient from "../config/dbClient.js";
import { ObjectId } from 'mongodb';

class mascotasModel {
    async create(mascota) {
        const collMascotas = dbClient.db.collection('mascotas');

        return await collMascotas.insertOne(mascota);
    }

    async getAll() {
        const collMascotas = dbClient.db.collection('mascotas');

        return await collMascotas.find({}).toArray();
    }

    async getOne(id) {
        const collMascotas = dbClient.db.collection('mascotas');

        return await collMascotas.findOne({ _id: new ObjectId(id) });
    }
}

export default new mascotasModel();