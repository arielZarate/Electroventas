const { DataTypes } = require("sequelize");

const sequelize = require("../Db/db");

const Images = sequelize.define(
  "Images",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    principal: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    //no hace falta que lo declare al prodcuto de forma explicita , pero o hago de modo ejemplo para que quede la forma
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

//en el associations se hace las asociaciones

module.exports = Images;
