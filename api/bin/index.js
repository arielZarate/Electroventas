const server = require("../src/app.js");
const sequelize = require("../src/Db/db.js");
const { PORT, DB_NAME } = process.env;
const  { setRoles }= require("../src/helpers/roles-helpers.js");
//DECLARAMOS PUERTO EN .ENV
const generateServidor = async () => {
  try {
    await sequelize.authenticate();
    server.listen(PORT,() => {
      console.log(
        `
       Connection has been established successfully on port ${PORT} in db del proyecto ${DB_NAME} 
         `
      );
    });

     await sequelize.sync({ force:false });  //sino tiene el await fallara
    await setRoles();
     

    //llamo al metodo apenas se crea el server para que me cree los generes en la bd
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

generateServidor();

