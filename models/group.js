'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate (models) {
      Group.hasMany(models.Student, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Group.init(
    {
      code: {
        type: DataTypes.STRING(8),
        unique: true,
        allowNull: false,
        validate: {
          is: /^[a-z]{2}20[0-9]{2}-[12]$/i,
        },
      },
      enteredAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isBefore: new Date().toISOString(),
        },
      },
    },
    {
      sequelize,
      modelName: 'Group',
      underscored: true,
    }
  );
  return Group;
};
