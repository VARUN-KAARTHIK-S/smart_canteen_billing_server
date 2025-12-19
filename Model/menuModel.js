import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    image: String
});
const menuCollection = mongoose.model("Menu", menuSchema);
export default menuCollection;

