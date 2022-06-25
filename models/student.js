'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate (models) {
      Student.belongsTo(models.Group);
    }
  }

  // при hasMany и belongsTo автоматически
  // добавляется свойство GroupId
  Student.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]*$/,
          len: [1, 64],
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]*$/,
          len: [1, 64],
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      birthday: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
          isBefore: new Date().toISOString(),
        },
      },
      isMale: DataTypes.BOOLEAN,
      activitiesCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Student',
      underscored: true,
    }
  );
  return Student;
};
