const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({
    name: { type: String ,
        required: [
           true,
           "name is required"  
        ] ,
        minlength: [
           3,
           "At least 3"
        ]
    }
   
    
}, { timestamps: true });
module.exports.author = mongoose.model('author', authorSchema);