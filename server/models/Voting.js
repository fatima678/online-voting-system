const mongoose = require('mongoose')
const VotingSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String


})
const VotingModel =  mongoose.model("users", VotingSchema)
module.exports = VotingModel 