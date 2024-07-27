// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');
// // // const VotingModel = require('./models/Voting');
// // // // server/index.js

// // // const CandidateModel = require('./models/Candidate');

// // // const app = express();
// // // app.use(express.json());
// // // app.use(cors());

// // // mongoose.connect("mongodb+srv://softwarechaser4:software@cluster0.26od2df.mongodb.net/?retryWrites=true&w=majority&appName=test").then(user => {
// // //     console.log("connected Successfully");
// // // })
// // // .catch(err => {
// // //    console.log(err.message);
// // // });
// // // app.post("/login", (req, res) => {
// // //     const { email, password } = req.body;
// // //     VotingModel.findOne({ email: email })
// // //         .then(user => {
// // //             if (user) {
// // //                 if (user.password === password) {
// // //                     res.json("success");
// // //                 } else {
// // //                     res.json("incorrect_password");
// // //                 }
// // //             } else {
// // //                 res.json("invalid_email");
// // //             }
// // //         })
// // //         .catch(err => {
// // //             res.status(500).json("server_error");
// // //         });
// // // });

// // // app.post('/register', (req, res) => {
// // //     VotingModel.create(req.body)
// // //         .then(votings => res.json(votings))
// // //         .catch(err => res.json(err));
// // // });
// // // // server/index.js
// // // app.post('/register-candidate', (req, res) => {
// // //     // Assuming you have a Candidate model
// // //     CandidateModel.create(req.body)
// // //         .then(candidate => res.json(candidate))
// // //         .catch(err => res.json(err));
// // // });

// // // app.get('/candidates', (req, res) => {
// // //     CandidateModel.find()
// // //         .then(candidates => res.json(candidates))
// // //         .catch(err => res.status(500).json(err));
// // // });


// // // app.listen(3001, () => {
// // //     console.log("server is running");
// // // });


// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const VotingModel = require('./models/Voting');
// // const CandidateModel = require('./models/Candidate');
// // const VoteModel = require('./models/Vote'); // Assuming you have a Vote model

// // const app = express();
// // app.use(express.json());
// // app.use(cors());

// // mongoose.connect("mongodb+srv://softwarechaser4:software@cluster0.26od2df.mongodb.net/?retryWrites=true&w=majority&appName=test")
// //     .then(() => {
// //         console.log("Connected Successfully");
// //     })
// //     .catch(err => {
// //         console.log(err.message);
// //     });

// // app.post("/login", (req, res) => {
// //     const { email, password } = req.body;
// //     VotingModel.findOne({ email: email })
// //         .then(user => {
// //             if (user) {
// //                 if (user.password === password) {
// //                     res.json("success");
// //                 } else {
// //                     res.json("incorrect_password");
// //                 }
// //             } else {
// //                 res.json("invalid_email");
// //             }
// //         })
// //         .catch(err => {
// //             res.status(500).json("server_error");
// //         });
// // });

// // app.post('/register', (req, res) => {
// //     VotingModel.create(req.body)
// //         .then(votings => res.json(votings))
// //         .catch(err => res.json(err));
// // });

// // app.post('/register-candidate', (req, res) => {
// //     CandidateModel.create(req.body)
// //         .then(candidate => res.json(candidate))
// //         .catch(err => res.json(err));
// // });

// // app.get('/candidates', (req, res) => {
// //     CandidateModel.find()
// //         .then(candidates => res.json(candidates))
// //         .catch(err => res.status(500).json(err));
// // });

// // // New Endpoint for casting a vote
// // app.post('/cast-vote', (req, res) => {
// //     const { candidateId, vote } = req.body;

// //     // Validate vote input (ensure it's within expected range, e.g., 1)
// //     if (vote !== 1) {
// //         return res.status(400).json({ error: 'Invalid vote' });
// //     }

// //     // Ensure candidateId is valid and corresponds to an existing candidate
// //     CandidateModel.findById(candidateId)
// //         .then(candidate => {
// //             if (!candidate) {
// //                 return res.status(404).json({ error: 'Candidate not found' });
// //             }

// //             // Save the vote to the database
// //             const newVote = new VoteModel({ candidateId, vote });
// //             return newVote.save();
// //         })
// //         .then(savedVote => {
// //             res.status(201).json(savedVote);
// //         })
// //         .catch(err => {
// //             res.status(500).json({ error: 'Failed to cast vote' });
// //         });
// // });

// // app.listen(3001, () => {
// //     console.log("Server is running on port 3001");
// // });


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const VotingModel = require('./models/Voting');
// const CandidateModel = require('./models/Candidate');
// const VoteModel = require('./models/Vote');

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb+srv://softwarechaser4:software@cluster0.26od2df.mongodb.net/?retryWrites=true&w=majority&appName=test")
//     .then(() => {
//         console.log("Connected Successfully");
//     })
//     .catch(err => {
//         console.log(err.message);
//     });

// // Existing routes...

// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     VotingModel.findOne({ email })
//         .then(user => {
//             if (user) {
//                 if (user.password === password) {
//                     res.json("success");
//                 } else {
//                     res.json("incorrect_password");
//                 }
//             } else {
//                 res.json("invalid_email");
//             }
//         })
//         .catch(err => {
//             res.status(500).json("server_error");
//         });
// });

// app.post('/register', (req, res) => {
//     VotingModel.create(req.body)
//         .then(votings => res.json(votings))
//         .catch(err => res.json(err));
// });

// app.post('/register-candidate', (req, res) => {
//     CandidateModel.create(req.body)
//         .then(candidate => res.json(candidate))
//         .catch(err => res.json(err));
// });

// app.get('/candidates', (req, res) => {
//     CandidateModel.find()
//         .then(candidates => res.json(candidates))
//         .catch(err => res.status(500).json(err));
// });

// app.post('/cast-vote/id', async (req, res) => {
//     const { candidateId, voteValue } = req.body;

//     // Validate voteValue input
//     if (!voteValue) {
//         return res.status(400).json({ error: 'Invalid vote value' });
//     }

//     try {
//         // Ensure candidateId is valid and corresponds to an existing candidate
//         const candidate = await CandidateModel.findById(candidateId);

//         if (!candidate) {
//             return res.status(404).json({ error: 'Candidate not found' });
//         }

//         // Save the vote to the appropriate collection
//         const voteData = { candidateId, voteValue };

//         if (candidate.position === 'Vice President') {
//             // Save to VicePresidentVote collection
//             const newVote = new VicePresidentVoteModel(voteData);
//             await newVote.save();
//         } else {
//             // Save to Vote collection
//             const newVote = new VoteModel(voteData);
//             await newVote.save();
//         }

//         res.status(201).json({ message: 'Vote cast successfully' });
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to cast vote' });
//     }
// });


// // New endpoint to fetch aggregated vote results with candidate details
// app.get('/results', async (req, res) => {
//     try {
//         // Aggregation pipeline
//         const results = await VoteModel.aggregate([
//             {
//                 $lookup: {
//                     from: 'candidates', // The name of the candidates collection
//                     localField: 'candidateId',
//                     foreignField: '_id',
//                     as: 'candidate'
//                 }
//             },
//             {
//                 $unwind: '$candidate'
//             },
//             {
//                 $group: {
//                     _id: '$candidateId',
//                     candidateName: { $first: '$candidate.fullname' }, // Assuming 'fullname' is a field in CandidateModel
//                     totalVotes: { $sum: 1 }
//                 }
//             },
//             {
//                 $sort: { totalVotes: -1 } // Sort by total votes in descending order
//             }
//         ]);

//         res.json(results);
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to fetch results' });
//     }
// });

// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const VotingModel = require('./models/Voting');
const CandidateModel = require('./models/Candidate');
const VoteModel = require('./models/Vote');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://softwarechaser4:software@cluster0.26od2df.mongodb.net/?retryWrites=true&w=majority&appName=test")
    .then(() => {
        console.log("Connected Successfully");
    })
    .catch(err => {
        console.log(err.message);
    });

// Existing routes...

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    VotingModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("incorrect_password");
                }
            } else {
                res.json("invalid_email");
            }
        })
        .catch(err => {
            res.status(500).json("server_error");
        });
});

app.post('/register', (req, res) => {
    VotingModel.create(req.body)
        .then(votings => res.json(votings))
        .catch(err => res.json(err));
});

app.post('/register-candidate', (req, res) => {
    CandidateModel.create(req.body)
        .then(candidate => res.json(candidate))
        .catch(err => res.json(err));
});

app.get('/candidates', (req, res) => {
    CandidateModel.find()
        .then(candidates => res.json(candidates))
        .catch(err => res.status(500).json(err));
});

app.get('/candidates/:id', (req, res) => {
    CandidateModel.findById(req.params.id)
        .then(candidate => {
            if (candidate) {
                res.json(candidate);
            } else {
                res.status(404).json({ error: 'Candidate not found' });
            }
        })
        .catch(err => res.status(500).json(err));
});

app.post('/cast-vote', async (req, res) => {
    const { candidateId, voteValue } = req.body;

    // Validate voteValue input
    if (!voteValue) {
        return res.status(400).json({ error: 'Invalid vote value' });
    }

    try {
        // Ensure candidateId is valid and corresponds to an existing candidate
        const candidate = await CandidateModel.findById(candidateId);

        if (!candidate) {
            return res.status(404).json({ error: 'Candidate not found' });
        }

        // Save the vote to the Vote collection
        const voteData = { candidateId, voteValue };
        const newVote = new VoteModel(voteData);
        await newVote.save();

        res.status(201).json({ message: 'Vote cast successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to cast vote' });
    }
});

// New endpoint to fetch aggregated vote results with candidate details
app.get('/results', async (req, res) => {
    try {
        // Aggregation pipeline
        const results = await VoteModel.aggregate([
            {
                $lookup: {
                    from: 'candidates', // The name of the candidates collection
                    localField: 'candidateId',
                    foreignField: '_id',
                    as: 'candidate'
                }
            },
            {
                $unwind: '$candidate'
            },
            {
                $group: {
                    _id: '$candidateId',
                    candidateName: { $first: '$candidate.fullname' }, // Assuming 'fullname' is a field in CandidateModel
                    totalVotes: { $sum: 1 }
                }
            },
            {
                $sort: { totalVotes: -1 } // Sort by total votes in descending order
            }
        ]);

        res.json(results);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch results' });
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
