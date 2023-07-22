const Product = require("../models/product");
const Category = require("../models/category");
const Roles = require("../models/users/roles");
const User = require("../models/users/user");
const Images = require("../models/Images");
//ACA TENEMOS LAS ASOCIACIONES👌

/*

====ANTES==========
Product.belongsToMany(Categories, { through: "ProductByCategories" });
Categories.belongsToMany(Product, { through: "ProductByCategories" }); */

//UN PRODUCTO PERTENECE AUNA CATEGORIA EN ESPECIAL , Y UNA CATEGORIA COMO ELECTRICIDAD TIENE MUCHOS PRODUCTOS
Product.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Product, { foreignKey: "categoryId" });

//user-->Role
User.belongsTo(Roles /* { foreignKey: 'roleId' } */); //un usuario pertenece a un rol
Roles.hasMany(User); //roles tiene muchos users

// Establecer la relación de uno a muchos entre Producto e Imagen

Images.belongsTo(Product, { foreignKey: "productId" });
Product.hasMany(Images, { /*  as: "imagenes", */ foreignKey: "productId" });
