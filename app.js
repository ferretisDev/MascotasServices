import 'dotenv/config';
import express from 'express';
import routeMascotas from './routes/mascotasRoutes.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/mascotas', routeMascotas);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log('Servidor activo en el puerto ' + PORT))
    .on('error', (e) =>
        console.error('Error al iniciar el servidor:', e)
    );
