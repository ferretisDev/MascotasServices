import mascotasModel from "../models/mascotasModel.js";

class mascotasController {
    async create(req, res) {
        try {
            const data = await mascotasModel.create(req.body);

            if (!data) {
                return res.status(404).json({ status: 'Errorç≤', message: 'Mascota no creada' });
            }
            res.status(200).json(data);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const data = await mascotasModel.getAll()

            if (!data) {
                return res.status(404).json({ status: 'Ok', message: 'Mascotas no encontradas' });
            }
            res.status(200).json(data);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const data = await mascotasModel.getOne(id);

            if (!data) {
                return res.status(404).json({ status: 'Error', message: 'Mascota no encontrada' });
            }
            res.status(200).json(data);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            await mascotasModel.update(id, req.body);
            res.status(200).json({ status: 'Ok', message: 'Mascota actualizada correctamente' });
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await mascotasModel.delete(id);
            res.status(200).json({ status: 'Ok', message: 'Mascota eliminada correctamente' })
        }
        catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new mascotasController();