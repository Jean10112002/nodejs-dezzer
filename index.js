
import express from 'express';
import cors from "cors";
import { PORT } from './config/config.js';
import MusicaRouter from './router/Musica.router.js'
import { sequelize } from "./db/conexion.js";

const _PORT = PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
/* app.use('/api', routeDatos); */
/* app.use('/api', rotuerTypeUsers); */
/* app.use('/api', routerUser);
app.use('/api', ComentarioRoute); */
app.use('/api',MusicaRouter)

const main = async () => {
    try {
        await sequelize.authenticate();
        console.log('Base de datos conectada.');
        await sequelize.sync({ force: true })
        app.listen(_PORT, () => {
            console.log(`Servidor corriendo en el puerto => ${_PORT}`);
        });
    } catch (error) {
        console.log(`Error ${error}`);
    }
}
main();

