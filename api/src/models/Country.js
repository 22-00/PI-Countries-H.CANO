const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // capital: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    //   allowNull: true
    // },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    poblacion: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {timestamps: false});
};
