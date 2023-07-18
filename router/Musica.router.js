import express from 'express';
import { agregarFavorito, eliminarFavorito, obtenerFavoritos } from '../controller/MusicaController.js';

const router = express.Router();

router.post('/favorito',agregarFavorito );
router.get('/favorito',obtenerFavoritos );
router.delete('/favorito/:id',eliminarFavorito );


export default router;