// server/models/Candidate.js
const mongoose = require('mongoose');
 
const CandidateSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    department: { type: String, required: true },
    semester: { type: String, required: true },
    society: { type: String, required: true },
    position: {
        type: String,
        enum: ['President', 'Vice President', 'Executive'],
        required: true
    },
    symbol: { type: String, required: true },
votes: { type: Number, default: 0 } 
    
});

const CandidateModel = mongoose.model("candidates", CandidateSchema);

module.exports = CandidateModel;
