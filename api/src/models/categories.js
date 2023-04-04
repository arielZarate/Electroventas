const { DataTypes } = require("sequelize");
const sequelize = require("../Db/db");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Categories = sequelize.define(
  "Categories",
 
    {
/*   id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      }, */
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,

      },
    },

  {
    timestamps: true,
    paranoid: true,
    createdAt:'createTimestamp',
    updatedAt: "updateTimestamp",
    deletedAt: "destroyTimestamp",

  
  }     
    
   
 
);

module.exports = Categories;




