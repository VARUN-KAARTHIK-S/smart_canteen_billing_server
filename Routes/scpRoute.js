import { signin, signup, getAllUsers, deleteUser } from '../Controller/authController.js'
import { getMenu, addMenu, updateMenu, deleteMenu } from "../Controller/menuController.js";
import { createOrder, getUserOrders, updateOrderStatus, deleteOrder, getAllOrders, getOrderHistory } from "../Controller/orderController.js";
import express from 'express'
const route = express.Router()

route.post('/signin', signin)
route.post('/signup', signup)
route.get("/menu", getMenu);
route.post("/menu", addMenu);
route.put("/menu/:id", updateMenu);
route.delete("/menu/:id", deleteMenu);
route.post("/orders", createOrder);
route.get("/orders/history/:userId", getOrderHistory);
route.get("/orders/all", getAllOrders);
route.get("/orders/:userId", getUserOrders);
route.put("/orders/:orderId", updateOrderStatus);
route.delete("/orders/:orderId", deleteOrder);
route.get("/users", getAllUsers);
route.delete("/users/:id", deleteUser);

export default route;


