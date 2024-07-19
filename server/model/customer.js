import { DataTypes } from "sequelize";

export const customerModel = async (sequelize) => {
    const customer =  sequelize.define('Customer', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact_info: {
        type: DataTypes.STRING,
      }
    });
    return customer;
  };



