import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Menu from './Model/menuModel.js'

dotenv.config()

const seedMenu = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connected to MongoDB')

        await Menu.deleteMany({})
        console.log('Cleared existing menu items')

        const menuItems = [
            { name: 'Dosa', price: 15, quantity: 50, image: 'https://via.placeholder.com/150' },
            { name: 'Tea', price: 10, quantity: 100, image: 'https://via.placeholder.com/150' },
            { name: 'Coffee', price: 20, quantity: 80, image: 'https://via.placeholder.com/150' },
            { name: 'Veg-Puff', price: 15, quantity: 60, image: 'https://via.placeholder.com/150' },
            { name: 'Idli', price: 12, quantity: 40, image: 'https://via.placeholder.com/150' },
            { name: 'Samosa', price: 18, quantity: 30, image: 'https://via.placeholder.com/150' }
        ]

        await Menu.insertMany(menuItems)
        console.log('Menu items seeded successfully')
        
        process.exit(0)
    } catch (error) {
        console.error('Error seeding menu:', error)
        process.exit(1)
    }
}

seedMenu()