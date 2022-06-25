'use strict';

const { Model } = require('sequelize');
const { Student } = require('./student');
const { Subject } = require('./subject');

module.exports = (sequelize, DataTypes) => {
  class StudentSubjects extends Model {
    static associate (models) {}
  }

  StudentSubjects.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        references: {
          model: Student,
          key: 'id',
        },
      },
      subjectId: {
        type: DataTypes.INTEGER,
        references: {
          model: Subject,
          key: 'id',
        },
      },
      mark: {
        type: DataTypes.INTEGER,
        validate: {
          min: 2,
          max: 5,
          isInt: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'StudentSubjects',
      underscored: true,
    }
  );
  return StudentSubjects;
};
