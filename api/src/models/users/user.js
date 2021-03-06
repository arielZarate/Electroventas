const { DataTypes } = require("sequelize");
const sequelize = require("../../Db/db");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const User = sequelize.define(
  "User",
  {
    firstname: {
      type:DataTypes.STRING,
      allowNull: false,
    },
     lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      
/*     avatar: {
    type: DataTypes.STRING,
    allowNull:true
    },
    */
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  
      birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
    },
    city: {
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    } 
    ,

    token_expiration_date: {
  type: DataTypes.DATE,
  allowNull: true,

   //defaultValue: sequelize.literal('2000-01-01 00:00:00'),

/*   get() {
    const expirationDate = this.getDataValue('token_expiration_date');
    return expirationDate ? moment(expirationDate).format('DD/MM/YYYY HH:mm:ss') : null;
  },
  set(value) {
    this.setDataValue('token_expiration_date', value ? moment(value, 'DD/MM/YYYY HH:mm:ss').toDate() : null);
  } */
}
   /*  avatarId: {
      type: DataTypes.STRING,
    },  */

 /*    confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    */

/*   status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
 */
 /*    verifCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, */
  },

  {
    timestamps: true,
    paranoid: true,
     createdAt:'createTimestamp',
    updatedAt: "updateTimestamp",
    deletedAt: "destroyTimestamp",
  }
);

module.exports = User;



   //relaciono la fk del user con algun role
   /*  roleId: {
    type: DataTypes.INTEGER,
    defaultValue:1,
    references: {
      model: 'Roles',
      key: 'id',
    }
  } 
  
  
  sino opcion 2 seria en la asociacion
  User.belongsTo(Role, { foreignKey: 'roleId' });
  
  */