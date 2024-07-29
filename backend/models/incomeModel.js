const mongoose= require('mongoose');

const IncomeSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true, // This will remove whitespace from the beginning and end of the string
        maxLength:50
    },
    amount:{
        type:Number,
        required:true,
        maxLength:20,
        trim:true
    },
    type:{
        type:String,
        default:"income",
        required:true,
    },
    date:{
        type:Date,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        maxLength:50,
        trim:true
    }

},{timestamps:true})

module.exports=mongoose.model('Income',IncomeSchema);