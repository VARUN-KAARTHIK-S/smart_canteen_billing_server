import scpCollections from "../Model/scpModel.js";
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

dotenv.config()

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JSON_WEB, { expiresIn: "1h" })
}

export const signup = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const userExists = await scpCollections.findOne({ email })
        if (userExists) {
            return res.status(400).json({ message: "user already exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)

        const user = await scpCollections.create({
            name,
            email,
            password: hashedPass
        })

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await scpCollections.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "invalid Credential" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "invalid Credential" })
        }

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await scpCollections.find().select('-password');
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        await scpCollections.findByIdAndDelete(req.params.id);
        res.json({ message: "User Deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
