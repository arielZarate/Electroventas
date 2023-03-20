const { DataTypes } = require("sequelize");
const sequelize = require("../Db/db");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    
    precio:{
      type:DataTypes.DOUBLE,
      allowNull:false,
      validate:{
        min:0 , 
      }
    }
    ,
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //quiero validar que sea del 1 al 5 asi lo puedo tipificar al juego
      validate: {
        /*  isNumeric: true, */
        max: 5,
        min: 1,
      },
    },
   
  
   /*  createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }, */
  },

  {
    timestamps: false,
  }
);

module.exports = Product;
