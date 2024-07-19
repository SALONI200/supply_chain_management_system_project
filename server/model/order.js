import { DataTypes } from 'sequelize';

export const orderModel = (sequelize) => {
  const order =  sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Pending', 'Fulfilled', 'Cancelled'),
      allowNull: false,
    },
  });
  return order;
};