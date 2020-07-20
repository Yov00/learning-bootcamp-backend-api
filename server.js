const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamps = require('./routes/bootcamps')

// Load env variables
dotenv.config({path:'./config/config.env'});

// Mount routes
const app = express();
app.use('/api/v1/bootcamps',bootcamps);

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server running in:${process.env.NODE_ENV} on port: ${process.env.PORT}`));