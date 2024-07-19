import { ordersModel } from "../postgres/postgres.js"
import { customerUserModel } from "../postgres/postgres.js"


export const getAllOrders = async (req, res) => {
    try {
        const orders = await ordersModel.findAll();
        if (orders.length == 0) {
            return res.status(200).json({ "error": "order not found" })
        }
        return res.status(200).json({ orders })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" })
    }

}

export const addOrder = async (req, res) => {
    const { customer_id, order_date, status } = req.body;
    try {
        // Validate input
        if (!customer_id || !order_date || !status) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const customer = await customerUserModel.findByPk(customer_id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        // Create the order
        const order = await ordersModel.create({ customer_id, order_date, status });
        res.status(201).json(order);

    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

export const updateOrder = async (req, res) => {
    const orderId = parseInt(req.params.orderid, 10);
    const { customer_id, order_date, status } = req.body;
    try {
        const order = await ordersModel.findByPk(orderId);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        // Check if customer_id exists in the Customer table
        if (customer_id !== undefined) {
            const customer = await customerUserModel.findByPk(customer_id);
            if (!customer) {
                return res.status(404).json({ error: 'Customer not found' });
            }
        }

        // Update the order with the new values
        const updatedOrder = await order.update({
            customer_id,
            order_date,
            status
        });

        res.status(200).json(updatedOrder);
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getOrderById = async (req, res) => {
    let orderId = req.params.orderid
    try {
        const order = await ordersModel.findOne({ where: { id: orderId } })
        if (order == null) {
            return res.status(200).json({ "message": "order not found." })
        }
        return res.status(200).json({ order })

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" })
    }

}

export const deleteOrder = async (req, res) => {
    const orderId = parseInt(req.params.orderid, 10);
    try {
        // Find the order by ID
        const order = await ordersModel.findByPk(orderId);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        // Delete the order
        await order.destroy();
        res.status(200).json({ "message": "order deleted successfully" });
    } catch (error) {
        console.error('Error deleting order:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

}


export const updateStatus = async (req, res) => {
    const orderId = parseInt(req.params.orderid, 10);
    const { status } = req.body;
    try {
        if (!status || !['Pending', 'Fulfilled', 'Cancelled'].includes(status)) {
            return res.status(400).json({ error: 'Invalid status value' });
        }

        // Find the order by ID
        const order = await ordersModel.findByPk(orderId);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        order.status = status;
        await order.save();

        res.status(200).json(order);

    } catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}




