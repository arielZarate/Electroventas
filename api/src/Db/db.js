 const { Sequelize } = require("sequelize");
const database = require("../Db/config");
require("../Db/associations");

// `postgres://${database.user}:${database.password}@${database.localhost}:${database.port}/${database.name_schema}`,
const sequelize = new Sequelize(
  `mysql://${database.user}:${database.password}@${database.localhost}:${database.port}/${database.name_schema}`,
  {
    //  host: 'localhost',
    dialect:
      "mysql" ,
    logging: false,
    native: false,
     define: {
      timestamps: false,
    },
  }
);

//========================================================================================

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

module.exports = sequelize;
 
