const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config1");

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM("user", "admin", "vendor"), defaultValue: "user" }
}, {
  timestamps: true,
});

module.exports = User;
