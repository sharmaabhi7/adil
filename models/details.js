const mongoose  = require("mongoose");

const connect = mongoose.connect("mongodb://localhost:27017/data");


connect.then(() => {
    console.log('Connected correctly to user details');
})
.catch(() => {
    console.log('Connection failed');
})


const connection = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    course:{
        type:String,
        required:true
    }
})



const user = new mongoose.model('/', connection);
module.exports = user;


