const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config1");

const Vendor = sequelize.define("Vendor", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  storeName: { type: DataTypes.STRING, allowNull: false },
  storeDescription: { type: DataTypes.TEXT },
  approved: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  timestamps: true,
});

module.exports = Vendor;
