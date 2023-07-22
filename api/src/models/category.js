const { DataTypes } = require("sequelize");
const sequelize = require("../Db/db");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Category = sequelize.define(
  "Category",

  {
    id: {
      type: DataTypes.INTEGER,
      //defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      autoIncrement: true,
    },
    names: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    /*    image: {
      type: DataTypes.STRING,
      allowNull: true,
    }, */

    /*   productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, */
  },

  {
    timestamps: true,
    paranoid: true,
    createdAt: "createTimestamp",
    updatedAt: "updateTimestamp",
    deletedAt: "destroyTimestamp",
  }
);

module.exports = Category;
