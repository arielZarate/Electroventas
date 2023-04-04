const Product =require('../models/product');
const Categories=require('../models/categories')
const Roles=require('../models/users/roles')
const User=require('../models/users/user')
//ACA TENEMOS LAS ASOCIACIONES👌


Product.belongsToMany(Categories, { through: "ProductByCategories" });
Categories.belongsToMany(Product, { through: "ProductByCategories" });


//user-->Role
 User.belongsTo(Roles,/* { foreignKey: 'roleId' } */); //un usuario pertenece a un rol
  Roles.hasMany(User);  //roles tiene muchos users
 
