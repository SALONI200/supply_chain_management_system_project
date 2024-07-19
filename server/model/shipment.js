import { DataTypes } from 'sequelize';

export const shipmentModel = (sequelize) => {
  return sequelize.define('Shipment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shipment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    delivery_date: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.ENUM('Shipped', 'In Transit', 'Delivered', 'Returned'),
      allowNull: false,
    },
  });
};
