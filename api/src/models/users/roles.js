const { DataTypes } = require("sequelize");

const sequelize = require("../../Db/db");

const Roles=sequelize.define(
"Roles",
{
   id: {
      type: DataTypes.INTEGER,
    /*   defaultValue: DataTypes.UUIDV4, */
      primaryKey: true,
    },  
    role: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,

  }
) 

module.exports=Roles;
