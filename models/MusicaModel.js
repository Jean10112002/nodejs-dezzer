import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const MusicaModel = sequelize.define(
  "musicas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preview: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      defaultValue: true,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: true,
    },
  },
  {
    timestamps: false,
  }
);
