const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const adminModel = require('../models/Admin.model');
const userModel = require('../models/User.model');  

// Admin Authentication Controller
const adminRegister = async (req, res) => {
    try {
        const { username, email, password, adminID } = req.body;

        if (adminID !== process.env.ADMIN_ID) {
            return res.status(403).json({
                success: false,
                message: 'Unauthorized: Invalid admin ID'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await adminModel.create({
            username,
            email,
            password: hashedPassword
        });

        const token = jwt.sign(
            { id: admin._id, username: admin.username, email: admin.email, role: "admin" },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });

        res.status(201).json({
            success: true,
            message: 'Admin registered successfully',
            token,
            admin
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error registering admin',
            error: err.message
        });
    }
};

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Await the DB query
        const admin = await adminModel.findOne({ email });

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Await password comparison
        const isPasswordValid = await bcrypt.compare(password, admin.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        const token = jwt.sign(
            { id: admin._id, email: admin.email, username: admin.username, role: "admin" },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });

        res.status(200).json({
            success: true,
            message: 'Admin logged in successfully',
            token
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error logging in admin',
            error: error.message
        });
    }
};

module.exports = { adminRegister, adminLogin };