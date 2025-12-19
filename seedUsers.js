import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import scpCollections from './Model/scpModel.js';
import connectdb from './Db/db.js';

const seedUsers = async () => {
    try {
        await connectdb();
        
       
        await scpCollections.deleteMany({});
        
       
        const adminPassword = await bcrypt.hash('admin123', 10);
        const userPassword = await bcrypt.hash('user123', 10);
        
       
        const users = [
            {
                name: 'Admin',
                email: 'admin@test.com',
                password: adminPassword,
                role: 'admin'
            },
            {
                name: 'User',
                email: 'user@test.com',
                password: userPassword,
                role: 'user'
            }
        ];
        
        await scpCollections.insertMany(users);
        console.log('Users seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding users:', error);
        process.exit(1);
    }
};

seedUsers();