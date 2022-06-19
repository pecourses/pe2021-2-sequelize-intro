'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  // NOT NULL - allowNull, UNIQUE - unique, CHECK, PRIMARY KEY - primaryKey, FOREIGN KEY (REFERENCES)
  // DEFAULT - defaultValue

  // ограничения - allowNull, unique, primaryKey
  // валидация - allowNull, validate
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
    }
  );
  return Student;
};
