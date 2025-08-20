import dbClient from "../config/dbClient.js";
import { ObjectId } from 'mongodb';

class mascotasModel {
    async create(model) {
        const collMascotas = dbClient.db.collection('mascotas');
        return await collMascotas.insertOne(model);
    }

    async getAll() {
        const collMascotas = dbClient.db.collection('mascotas');
        return await collMascotas.find({}).toArray();
    }

    async getOne(id) {
        const collMascotas = dbClient.db.collection('mascotas');
        return await collMascotas.findOne({ _id: new ObjectId(id) });
    }

    async update(id, model) {
        const collMascotas = dbClient.db.collection('mascotas');
        return await collMascotas.updateOne({ _id: new ObjectId(id) }, { $set: model });
    }

    async delete(id) {
        const collMascotas = dbClient.db.collection('mascotas');
        return await collMascotas.deleteOne({ _id: new ObjectId(id) });
    }
}

export default new mascotasModel();