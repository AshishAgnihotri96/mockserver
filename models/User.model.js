const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    user_id : {type : Number},
    company : {type : String, required : true},
    city : {type : String, required : true},
    location : {type : String, required : true},
    role  : {type : String, required : true},
    level  : {type : String, required : true},
    position  : {type : String, required : true},
    language   : {type : String, required : true},
    contract   : {type : String, required : true},
})

const UserModel = mongoose.model("masai_job", userSchema)


module.exports = {
    UserModel
}