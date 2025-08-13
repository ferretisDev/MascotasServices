import dbClient from "../config/dbClient.js"
class mascotasModel {
    async create(mascota) {
        const collMascotas = dbClient.db.collection('mascotas');

        return await collMascotas.insertOne(mascota)
    }

    async getAll() {
        const collMascotas = dbClient.db.collection('mascotas');

        return await collMascotas.find({}).toArray();
    }
}

export default new mascotasModel;