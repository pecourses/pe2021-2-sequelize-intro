'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    static associate (models) {
      Subject.belongsToMany(models.Student, {
        through: models.StudentSubjects,
        foreignKey: 'subjectId',
      });
    }
  }

  Subject.init(
    {
      title: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      hours: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
        },
      },
    },
    {
      sequelize,
      modelName: 'Subject',
      underscored: true,
    }
  );
  return Subject;
};
