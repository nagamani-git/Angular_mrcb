var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    confirmpassword:{
        type:String
    },
    mobileNumber:{
        type:Number
    },
    email:{
        type:String
    },
    address:{
        type:String
    }
},
    {
    collection:'users'
    
});

module.exports = mongoose.model('User',User);