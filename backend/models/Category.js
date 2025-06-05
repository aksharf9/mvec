const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config1");

const Category = sequelize.define("Category", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING }
}, {
  timestamps: false,
});

module.exports = Category;
