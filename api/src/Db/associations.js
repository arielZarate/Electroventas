const Product =require('../models/Product-model');
const Category=require('../models/Category-model')

//ACA TENEMOS LAS ASOCIACIONES👌
 Product.belongsToMany(Category, {
  through: "productByCategory",
  // foreignKey: "genresId",
});

Category.belongsToMany(Product, {
  through: "productByCategory",
});
 
//opcion2  by JorgeVega
/* const gameModel = require("../models/Videogames-model");

gameModel(sequelize); ==>> esto que le pasa por paramnetros es el sequelize del model

// el modelo esta asi

module.exposrts=(sequelize)=>{
  sequelize.define("User",{
    
  })
}
const {Videogames}=sequelize.models;
//despues hago las realciones
 */
