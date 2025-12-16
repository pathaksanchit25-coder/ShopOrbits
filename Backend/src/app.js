const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); // corrected module name
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const getAdminInfoRoutes = require('./routes/getinfo.routes');
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST"],
    credentials: true

}));
dotenv.config();



app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // added express. before urlencoded

app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    next();
});


//Auth Route
app.use('/api/auth', authRoutes);

//Info Route

app.use('/api/info', getAdminInfoRoutes);

module.exports = app;