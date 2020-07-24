const mongoose = require('mongoose');

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGO_URI,{
        // Options so no errors are produced
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex:true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold)
}

module.exports = connectDB;