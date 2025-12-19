import mongoose from "mongoose";

const scpSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    role: { type: String, default: "public" }
})

const scpCollections = mongoose.model("scpdb", scpSchema)
export default scpCollections;