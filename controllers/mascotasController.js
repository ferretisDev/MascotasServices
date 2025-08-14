import mascotasModel from "../models/mascotasModel.js";

class mascotasController {
    async create(req, res) {
        try {
            const data = await mascotasModel.create(req.body);

            if (!data) {
                return res.status(404).json({ message: 'Mascota no creada' });
            }
            res.status(201).json(data);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const data = await mascotasModel.getAll()

            if (!data) {
                return res.status(404).json({ message: 'Mascotas no encontradas' });
            }
            res.status(200).json(data);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res) {
        try {
            const data = await mascotasModel.getOne(req.params.id);

            if (!data) {
                return res.status(404).json({ message: 'Mascota no encontrada' });
            }
            res.status(200).json(data);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        try {
            await mascotasModel.update(req.body);
            res.status(200).json({ 'Status': 'Ok', 'Message': 'Mascota actualizada' });
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    async delete(req, res) {
        try {
            res.status(201).json({ status: 'delete-ok' })
        }
        catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new mascotasController();