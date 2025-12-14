const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const adminModel = require('../models/Admin.model');
const userModel = require('../models/User.model');

//Admin Authentication Controller

const adminRegister = async (req, res) => {
    try {
        const { username, email, password, adminID } = req.body;

        if (adminID !== process.env.ADMIN_ID) {
            return res.status(403).json({
                success: false,
                message: 'Unauthorized: Invalid admin ID'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const admin = await adminModel.create({
            username,
            email,
            password: hashedPassword
        });

        const token = jwt.sign({
            id: admin._id,
            username: admin.username,
            email: admin.email
        }, process.env.JWT_SECRET_KEY,
            { expiresIn: '1h' });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // only secure in production
            sameSite: "strict"
        });

        res.status(201).json({
            success: true,
            message: 'Admin Registered ',
            token,
            admin
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error Registering Admin',
            error: err.message,
        })
    }
}

const adminLogin = async(req,res)=>{
    
}

module.exports = adminRegister;