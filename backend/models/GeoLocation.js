const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config1");

const GeoLocation = sequelize.define("GeoLocation", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  vendorId: { type: DataTypes.INTEGER, allowNull: false },
  latitude: { type: DataTypes.FLOAT, allowNull: false },
  longitude: { type: DataTypes.FLOAT, allowNull: false },
  address: { type: DataTypes.STRING }
}, {
  timestamps: true,
});

module.exports = GeoLocation;
