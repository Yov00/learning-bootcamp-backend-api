const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

const testMiddleware = require('./middleware/test');



// Load env variables
dotenv.config({path:'./config/config.env'});

// Connect to database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');

const app = express();

// Body pareser
app.use(express.json());

// Dev logging middleware
if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'));
}

// Mount routes
app.use('/api/v1/bootcamps',bootcamps);
app.use('/api/v1/courses',courses);

app.use(testMiddleware);

app.use(errorHandler);


const PORT = process.env.PORT || 5000

const server = app.listen(PORT,console.log(`Server running in:${process.env.NODE_ENV} on port: ${process.env.PORT}`.yellow.bold));

// Handle unhandled rejections
process.on('unhandledRejection',(error,promise)=>{
    console.log(`Error: ${error.message}`.red);
    // Close serve & exit process
    server.close(()=>process.exit(1));
});