const { DataTypes } = require("sequelize");
const sequelize = require("../Db/db");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    timestamps: false,
  }
);

module.exports = Category;
