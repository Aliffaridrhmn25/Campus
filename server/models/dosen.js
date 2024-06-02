'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dosen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dosen.init({
    nmDosen: DataTypes.STRING,
    jkDosen: DataTypes.STRING,
    telpDosen: DataTypes.STRING,
    alamatDosenL: DataTypes.STRING,
    mtKuliahDosen: DataTypes.STRING,
    jadwalDosen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dosen',
  });
  return dosen;
};