// const mongoose = require('mongoose');

// const voteSchema = new mongoose.Schema({
//   candidateNumber: {
//     type: Number,
//     required: true,
//   },
// });

// const Vote = mongoose.model('Vote', voteSchema);

// module.exports = Vote;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema({
  candidateId: {
    type: Schema.Types.ObjectId,
    ref: 'Candidate', // Assuming you have a Candidate model
    required: true,
  },
  voteValue: {
    type: Number,
    required: true,
  },
});

const VoteModel = mongoose.model('Vote', voteSchema);

module.exports = VoteModel;
