import express from 'express';
import mascotasController from '../controllers/mascotasController.js';

const route = express.Router();

route.post('/', mascotasController.create);

route.get('/', mascotasController.getAll);

route.get('/:id', mascotasController.getOne);

route.put('/:id', mascotasController.update);

route.delete('/:id', mascotasController.delete);

export default route;
