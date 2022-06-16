const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var student = new mongoose.Schema({
    id: {
        type: Number,
    },
    school :{
        type:String,
    },
    district:{
        type:String,
    },
    studentid :{
        type:String,
    },
    class:{
        type:String,
    },
    day:{
        type:Number,
    },
    month:{
        type:Number,
    },
    year:{
        type:Number,
    },
    gender:{
        type:String,
    },
    birthplace:{
        type:String,
    },
    ethnicity:{
        type:String,
    },
    live:{
        type:String,
    },
    tel:{
        type:Number,
    },
    grade1:{
        type:Number,
    },
    grade2:{
        type:Number,
    },
    grade3:{
        type:Number,
    },
    grade4:{
        type:Number,
    },
    grade5:{
        type:Number,
    },
    sum5:{
        type:Number,
    },
    priority:{
        type:Number,
    },
    sumall:{
        type:Number,
    },
    note:{
        type:String,
    }

});

//Export the model
module.exports = mongoose.model("student", student);