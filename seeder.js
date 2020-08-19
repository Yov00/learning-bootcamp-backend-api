const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const colors = require('colors');


// Load env vars
dotenv.config({path:'./config/config.env'})

// Load models
const Bootcamp = require('./models/Bootcamp');
const Course = require('./models/Course');


// Connect to DB
mongoose.connect(process.env.MONGO_URI,{
    // Options so no errors are produced
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
});

// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`,'utf-8'));
const courses = JSON.parse(fs.readFileSync(`${__dirname}/_data/courses.json`,'utf-8'));

// Import into the database
const importData = async ()=>{
    try{
        await Bootcamp.create(bootcamps);
        await Course.create(courses);

        console.log('Data imported...'.green.inverse);
        process.exit();

    }catch(err){
        console.log(err.message);
    }
}

const deleteData = async ()=>{
    try{
        await Bootcamp.deleteMany();
        await Course.deleteMany();

        console.log("Data has been removed successfully!".red.inverse)
        process.exit();

    }catch(err){
        console.log(err.message);
    }
}

if(process.argv[2] === '-i'){
    importData();
}else if(process.argv[2] ==='-d'){
    deleteData();
}