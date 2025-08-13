import mascotasModel from "../models/mascotasModel.js";
class mascotasController {

    async create(req, res) {
        try {
            const data = await mascotasModel.create(req.body)
            res.status(201).json(data)
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const data = await mascotasModel.getAll()
            res.status(201).json(data)
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res) {
        try {
            res.status(201).json({ status: 'getone-ok' })
        }
        catch (e) {
            res.status(500).send(e);
        }
    }
    async update(req, res) {
        try {
            res.status(201).json({ status: 'update-ok' })
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

export default new mascotasController;