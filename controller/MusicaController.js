import { MusicaModel } from "../models/MusicaModel.js";

export const obtenerFavoritos = async (req, res) => {
    try {
      const favoritos = await MusicaModel.findAll();
      res.status(200).json(favoritos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
export const agregarFavorito = async (req, res) => {
    const {name,preview,picture,title}=req.body
    try {
        console.log(name,preview,picture,title)
      const crearFavorito = await MusicaModel.create({
        name:name,preview:preview,picture:picture,title:title
      });
      res.status(200).json({
        "message":"creado con exito"
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
export const eliminarFavorito = async (req, res) => {
    const {id}=req.params
    try {
       await MusicaModel.destroy({
        where:{id}
      });
      res.status(200).json({
        "message":"eliminado con exito"
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };