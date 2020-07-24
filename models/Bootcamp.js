const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name'],
        unique:true,
        trim:true,
        maxlength:[50,'Name cannot be more than 50 charecters']
    },

    slug:String,// Slugfy middle ware will be used
    description:{
        type:String,
        required:[true,'Please add a Description'],
        maxlength:[500,'Name cannot be more than 50 charecters']
    },

    website:{
        type:String,
        match:[
            /https?:\/\/(www\.)?(-a-zA-Z0-9@:%._\+~#=]{1,256}]\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please use a valid URL with HTTP or HTTPS'
        ]
    },

    phone:{
        type:String,
        maxlength:[20,'Phone number can not be longer than 20 charecters']
    },

    email:{
        type:String,
        match:[
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            'Please enter a valid Email'
        ]
    },

    address:{
        type:String
    },

    location:{
        // Geo Json Point
        type:{
            type:String,
            enum:['Point'],
            required:true
        },
        coordinates:{
            type:[Number],
            requied:true,
            index:'2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country:String
    },

    careers:{
        // Array of strings
        type:[String],
        required:true,
        enum:[
            'Web Developer',
            'Mobile Developer',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },

    avarageRating:{
        type:Number,
        min: [1,'Rating must be at least 1'],
        max: [10,'Rating can not be more than 10']
    },

    avarageCost:Number,

    photo:{
        type:String,
        default:'no-photo.jpg'
    },
    
    housing:{
        type:Boolean,
        default:false
    },

    jobAssistance:{
        type:Boolean,
        default:false
    },

    jobGuarantee:{
        type: Boolean,
        default:false
    },

    acceptGi:{
        type:Boolean,
        default:false
    },
     
    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('Bootcamp',BootcampSchema);