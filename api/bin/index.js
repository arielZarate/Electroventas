const server = require("../src/app.js");
const sequelize = require("../src/Db/db.js");
const { PORT ,DB_NAME} = process.env;

//DECLARAMOS PUERTO EN .ENV

const generateServidor = async () => {
  try {
    await sequelize.authenticate();
    server.listen(PORT, () => {
      console.log(
        `
       Connection has been established successfully on port ${PORT} in db del proyecto ${DB_NAME} 
         `
      );
    });

    sequelize.sync({ force: false });

    //llamo al metodo apenas se crea el server para que me cree los generes en la bd

  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

generateServidor();
 



/* const generateServidor = async () => {
  try {
    await cnn();

    console.log(`mongoDB conected in el port 27017`);
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

generateServidor();
 */