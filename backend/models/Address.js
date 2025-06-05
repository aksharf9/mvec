const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config1");

const Address = sequelize.define("Address", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  street: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
  state: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
  postalCode: { type: DataTypes.STRING },
  isDefault: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  timestamps: false,
});

module.exports = Address;
