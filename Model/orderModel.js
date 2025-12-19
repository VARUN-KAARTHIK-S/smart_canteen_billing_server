import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    items: [{
        _id: String,
        name: String,
        price: Number,
        cartQuantity: Number
    }],
    total: { type: Number, required: true },
    status: { type: String, default: 'Ready' },
    orderTime: { type: Date, default: Date.now },
    collected: { type: Boolean, default: false },
    collectedTime: { type: Date }
});

const Order = mongoose.model("Order", orderSchema);
export default Order;