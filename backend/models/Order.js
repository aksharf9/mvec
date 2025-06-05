const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config1");

const Order = sequelize.define("Order", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.ENUM("pending", "shipped", "delivered", "cancelled"), defaultValue: "pending" },
  totalAmount: { type: DataTypes.FLOAT, allowNull: false }
}, {
  timestamps: true,
});

module.exports = Order;
