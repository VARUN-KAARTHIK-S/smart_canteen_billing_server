import Order from "../Model/orderModel.js";

export const createOrder = async (req, res) => {
    try {
        const { orderId, userId, items, total, userEmail, userName } = req.body;
        const order = new Order({
            orderId,
            userId,
            items,
            total,
            userEmail,
            userName
        });
        await order.save();
        res.status(201).json({ message: "Order created successfully", order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await Order.find({
            $or: [
                { userId: userId },
                { userEmail: userId }
            ]
        }).sort({ orderTime: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).sort({ orderTime: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOrderHistory = async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await Order.find({
            $or: [
                { userId: userId },
                { userEmail: userId }
            ]
        }).sort({ orderTime: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const updateData = req.body;
        const order = await Order.findOneAndUpdate(
            { orderId },
            updateData,
            { new: true }
        );
        res.json({ message: "Order updated", order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        await Order.findOneAndDelete({ orderId });
        res.json({ message: "Order collected and removed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};