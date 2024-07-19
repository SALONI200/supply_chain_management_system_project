import express from 'express';
import { getAllCustomer, addCustomer, updateCustomer, deleteCustomer, getCustomerById } from '../controller/customerController.js';
import { getAllOrders, addOrder, updateOrder, getOrderById, deleteOrder, updateStatus } from '../controller/ordersController.js'

const router = express.Router()

router.get('/getCustomer', getAllCustomer)
router.post('/addCustomer', addCustomer)
router.put('/customer/:customerid', updateCustomer)
router.delete('/customer/:customerid', deleteCustomer)
router.get('/customer/:customerid', getCustomerById)

router.get('/getOrders', getAllOrders)
router.post('/addOrder', addOrder)
router.put('/order/:orderid',updateOrder)
router.delete('/order/:orderid',deleteOrder)
router.get('/order/:orderid',getOrderById)
router.patch('/orders/:orderid/status',updateStatus)







export default router;