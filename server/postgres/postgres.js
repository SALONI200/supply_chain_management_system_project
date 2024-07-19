import { Sequelize } from "sequelize";
import { customerModel } from "../model/customer.js";
import { orderModel } from "../model/order.js";

const sequelize = new Sequelize('supply_chain_management_system', 'postgres', 'Saloni@221', {
    host: 'localhost',
    dialect: 'postgres'
});

let customerUserModel = null;
let ordersModel = null;


const connection  = async () => {
    try {        
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        customerUserModel = await customerModel(sequelize);
        ordersModel = await orderModel(sequelize);
        await sequelize.sync();
        console.log("Database Synced:::")

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export {
    connection,
    customerUserModel,
    ordersModel
}
