const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema ({
    title:{type:String,
        required: true
    },
    description: { type:String,
        required:true
    },
    location: {type: String,
        required: true
    }
   
}, { timestamps: true })

//exporting the model

module.exports = mongoose.model("Event", eventSchema);


