import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectdb = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected db");
    }
    catch (err) {
        console.log(err);
    }
}
export default connectdb;