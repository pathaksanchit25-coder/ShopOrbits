const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); // corrected module name
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes')

dotenv.config();


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // added express. before urlencoded

app.use('/api/auth',authRoutes);

module.exports = app;