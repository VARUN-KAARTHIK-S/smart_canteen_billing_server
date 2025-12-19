import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import connectdb from './Db/db.js'
import route from './Routes/scpRoute.js'
dotenv.config()
const PORT = 5000
const app = express()
connectdb()
app.use(cors())
app.use(express.json())
app.use('/scp', route)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    
})

