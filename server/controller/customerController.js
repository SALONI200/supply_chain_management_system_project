import { customerUserModel } from "../postgres/postgres.js"

export const getAllCustomer = async (req, res) => {

    try {

        const customers = await customerUserModel.findAll();
        if (customers.length == 0) {
            return res.status(200).json({ "error": "customer not found" })
        }
        return res.status(200).json({ customers })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" })
    }

}

export const addCustomer = async (req, res) => {
    const { name, contact_info } = req.body;
    try {
        const cust = await customerUserModel.findOne({ where: { name: name } })
        if (cust == null) {
            await customerUserModel.create(req.body);
            return res.status(201).json({ message: "customer added successfully" })
        }
        return res.status(200).json({ message: "customer already present" })

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" })
    }

}

export const updateCustomer = async (req, res) => {
    let custId = req.params.customerid
    try {
        const cust = await customerUserModel.update(req.body, { where: { id: custId } })
        if (cust[0] == 0) {
            return res.status(404).json({ message: "customer not found" })

        }
        return res.status(200).json({ message: "customer updated successfully" })

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" })
    }

}

export const getCustomerById = async (req, res) => {
    let custId = req.params.customerid
    try {
        const cust = await customerUserModel.findOne({ where: { id: custId } })
        if (cust == null) {
            return res.status(200).json({ "message":"customer not found." })
        }
        return res.status(200).json({ cust })

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" })
    }

}

export const deleteCustomer = async (req, res) => {
    let custId = req.params.customerid
    try {
        const cust = await customerUserModel.findOne({ where: { id: custId } })
        if (cust == null) {
            return res.status(404).json({ message: "customer not found" })
        }
        await cust.destroy();
        return res.status(200).json({ message: "customer deleted succesfully." })

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" })
    }

}



