const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const database = {
  user: DB_USER,
  password: DB_PASSWORD,
  localhost: DB_HOST,
  port: DB_PORT,
  name_schema: DB_NAME,
};

module.exports = database;
