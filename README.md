
## API Documentation
Overview
This application provides an API for managing customers, carts, and orders. It includes endpoints for user authentication, cart management, promocode application, and order confirmation. The API is built using Express.js and provides a RESTful interface for interacting with the system.

## Setup
Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)
Installation
Clone the repository:

```bash
git clone https://github.com/umeshkaushik-21122000/backend.git
```
#### Navigate to the project directory:

```bash
cd backend
```
#### Install the dependencies:

bash
Copy code
npm install
Start the server:

```bash
npm start
```
The server will run on http://localhost:<port>. The default port is 3000.

## Routes
#### Middleware
The following middleware is used:

- bodyParser.json(): Parses incoming JSON requests.
- bodyParser.urlencoded({ extended: true }): Parses URL-encoded request bodies.
- cors(): Enables Cross-Origin Resource Sharing.

#### Authentication Middleware
```javascript
const authenticate = (req, res, next) => {
  const { customerid } = req.headers;
  if (customers.some(customer => customer.customerId === customerid)) {
    next();
  } else {
    res.status(401).json('Unauthorized');
  }
};
```
## Routes
### GET /products
- Description: Retrieve a list of all products.
- Response: 200 OK with a JSON array of products.
### POST /signUp
- Description: Sign up a new customer.
- Request Body:
```json
{
  "email": "customer@example.com",
  "password": "securepassword"
}
```
Response:
- 200 OK with a JSON object containing customerId if successful.
- 401 Unauthorized if the email already exists.
#### POST /signIn
- Description: Sign in a customer.
- Request Body:
```json
{
  "email": "customer@example.com",
  "password": "securepassword"
}
```
Response:
- 200 OK with a JSON object containing customerId if successful.
- 400 Bad Request if email or password is incorrect.
#### POST /isCustomer
- Description: Check if a customer exists.
- Request Headers: customerid
Response:
- 200 OK with a JSON boolean indicating whether the customer exists.
#### POST /addToCart
- Description: Add an item to the customer's cart.
- Request Headers: customerid
Request Body:
```json
{
  "item": "itemId",
  "qty": 2,
  "price": 20.00
}
```
Response:
- 200 OK with a success message if the item is added.
- 404 Not Found if the cart is not found.
#### POST /promocode
- Description: Generate a new promocode.
- Request Headers: customerid
Response:
- 200 OK with a JSON object containing the promocode.
#### POST /applyPromocode
- Description: Apply a promocode to the cart.
- Request Headers: customerid
Request Body:
```json

{
  "promocode": "PROMO123"
}
```
Response:
- 200 OK with a success message if the promocode is valid and applicable.
- 400 Bad Request if the promocode is invalid.
- 404 Not Found if the promocode is not applicable to the order.
#### POST /confirmOrder
- Description: Confirm and place an order.
- Request Headers: customerid
Response:
- 200 OK with a success message if the order is placed.
- 404 Not Found if the cart is not found.
#### GET /cart
- Description: View the customer's cart.
- Request Headers: customerid
Response:
- 200 OK with a JSON object containing the cart details.
- 404 Not Found if the cart is not found.
#### GET /orders
- Description: View the customer's orders.
- Request Headers: customerid
Response:
- 200 OK with a JSON object containing the order details.
- 404 Not Found if the orders are not found.
