const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    name:{type:String,
        required: true
    },
    email: { type:String,
        required:true
    }
    })

//exporting user model
module.exports = mongoose.model("User", userSchema)




