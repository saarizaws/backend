const mongoose = require("mongoose")
const { use } = require("../routes/auth")

const userSchema = new mongoose.Schema({
    mail:{type:String,unique:true},
    username:{type:String},
    password:{type:String}
})

module.exports = mongoose.model('user',userSchema)