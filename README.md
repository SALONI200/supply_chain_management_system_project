# Supply Chain Management System

## Overview

This project provides a RESTful API for managing a supply chain system, including products, suppliers, customers, orders, and shipments. The API allows for CRUD operations and additional functionalities like inventory tracking, order fulfillment, and generating supply chain reports.

## Technologies Used

- Node.js
- PostgreSQL

## Setup and Configuration

### Prerequisites

- Node.js (v14.x or higher)
- PostgreSQL (v12.x or higher)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/supply-chain-management-api.git
    cd supply-chain-management-api
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure environment variables:**

    Create a `.env` file in the root directory with the following content:

    ```env
    DATABASE_URL=postgres://username:password@localhost:5432/supply_chain_db
    PORT=3000
    ```

    Replace `username`, `password`, and `supply_chain_db` with your PostgreSQL credentials and database name.

4. **Run database migrations:**

    Make sure you have a migration tool like `sequelize-cli` or `knex` set up. For example, with Sequelize:

    ```bash
    npx sequelize-cli db:migrate
    ```

5. **Start the server:**

    ```bash
    npm start
    ```

    The server will start on port 3000 by default.

## API Endpoints

### Customers

- **GET /customers**
  - List all customers

- **POST /customers**
  - Create a new customer

- **GET /customers/{customer_id}**
  - Retrieve a customer by ID

- **PUT /customers/{customer_id}**
  - Update a customer by ID

- **DELETE /customers/{customer_id}**
  - Delete a customer by ID

### Orders

- **GET /orders**
  - List all orders

- **POST /orders**
  - Create a new order

- **GET /orders/{order_id}**
  - Retrieve an order by ID

- **PUT /orders/{order_id}**
  - Update an order by ID

- **DELETE /orders/{order_id}**
  - Delete an order by ID

- **PATCH /orders/{order_id}/status**
  - Update the status of an order

- **GET /orders/{order_id}/items**
  - List all items in an order

## Database Models

### Product

- `id` (Primary Key)
- `name`
- `description`
- `price`
- `supplier_id` (Foreign Key referencing Supplier)
- `stock` (Integer indicating available quantity)

### Supplier

- `id` (Primary Key)
- `name`
- `contact_info`
- `products` (One-to-Many relationship with Product)

### Customer

- `id` (Primary Key)
- `name`
- `contact_info`
- `orders` (One-to-Many relationship with Order)

### Order

- `id` (Primary Key)
- `customer_id` (Foreign Key referencing Customer)
- `order_date`
- `status` (Pending, Fulfilled, Cancelled)
- `order_items` (One-to-Many relationship with OrderItem)

### OrderItem

- `id` (Primary Key)
- `order_id` (Foreign Key referencing Order)
- `product_id` (Foreign Key referencing Product)
- `quantity`
- `price`

### Shipment

- `id` (Primary Key)
- `order_id` (Foreign Key referencing Order)
- `shipment_date`
- `delivery_date`
- `status` (Shipped, In Transit, Delivered, Returned)

## Contributing

Feel free to submit issues or pull requests if you encounter any bugs or have suggestions for improvement.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
