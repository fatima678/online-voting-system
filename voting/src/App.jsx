// // src/App.jsx
// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Registration from "./Registration";
// import Login from './Login';
// import VotePage
//  from "./VotePage";

// import Home from './Home';
// import CandidateList from './CandidateList';
// import CandidateRegistration from './CandidateRegistration';
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";
// import History from './History'
// import Profile from './profiles/Profile';
// import Imran from './profiles/Imran'; // Ensure this file exists and has a default export
// // import Tayyab from './profiles/Tayyab'; // Ensure this file exists and has a default export
// import Butto from './profiles/Butto';   
// import Nawz from './profiles/Nawz';     
// import Maryam from './profiles/Maryam'; 
// import CastVote from "./CastVote";
// import Results from "./Results"
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/register" />} />
//         <Route path="/register" element={<Registration />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/candidate-list" element={<CandidateList />} />
        

//         <Route path="/register-candidate" element={<CandidateRegistration />} />
//         <Route path="/cast-vote/:id" element={<CastVote />} />
//         <Route path="/results" element={<Results />} />
//         <Route path="/contactUs" element={<ContactUs />} />
//         <Route path="/history" element={<History />} />

//         <Route path="/profiles" element={<Profile />} />
//         <Route path="/imran" element={<Imran />} />
        {/* <Route path="/tayyab" element={<Tayyab />} /> */}
//         <Route path="/butto" element={<Butto />} />
//         <Route path="/nawz" element={<Nawz />} />
//         <Route path="/maryam" element={<Maryam />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



// // // src/App.jsx
// // import React from "react";
// // import Registration from "./Registration";
// // import Login from './Login';
// // import Home from './Home';
// // import CandidateRegistration from './CandidateRegistration';
// // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // import AboutUs from "./AboutUs";
// // import ContactUs from "./ContactUs";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Navigate to="/register" />} />
// //         <Route path="/register" element={<Registration />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/home" element={<Home />} />
// //         <Route path="/register-candidate" element={<CandidateRegistration />} /> {/* New route */}
// //         <Route path="/aboutUs" element={<AboutUs />} />
// //         <Route path="/contactUs" element={<ContactUs />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;




import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Registration from "./Registration";
import Login from './Login';
import Home from './Home';
import CandidateList from './CandidateList';
import CandidateRegistration from './CandidateRegistration';
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import History from './History';
import Profile from './profiles/Profile';
import Imran from './profiles/Imran'; 
import Butto from './profiles/Butto';   
import Nawz from './profiles/Nawz';     
import Maryam from './profiles/Maryam';
import Tayyab from './profiles/Tayyab'; 
import CastVote from "./CastVote";

import PrivateRoute from './PrivateRoute'; // Import the PrivateRoute component

import Results from "./Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/candidate-list" element={<CandidateList />} />
        <Route path="/register-candidate" element={<CandidateRegistration />} /> */}
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/candidate-list" element={<PrivateRoute><CandidateList /></PrivateRoute>} />
        <Route path="/register-candidate" element={<PrivateRoute><CandidateRegistration /></PrivateRoute>} />
        <Route path="/cast-vote/:id" element={<PrivateRoute><CastVote /></PrivateRoute>} />
        <Route path="/results" element={<PrivateRoute><Results /></PrivateRoute>} />
        <Route path="/aboutUs" element={<PrivateRoute><AboutUs /></PrivateRoute>} />
        <Route path="/contactUs" element={<PrivateRoute><ContactUs /></PrivateRoute>} />
        <Route path="/history" element={<PrivateRoute><History /></PrivateRoute>} />
        <Route path="/profiles" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/imran" element={<PrivateRoute><Imran /></PrivateRoute>} />
        <Route path="/butto" element={<PrivateRoute><Butto /></PrivateRoute>} />
        <Route path="/nawz" element={<PrivateRoute><Nawz /></PrivateRoute>} />
       < Route path="/tayyab" element={<PrivateRoute><Tayyab /></PrivateRoute>} /> 
        <Route path="/maryam" element={<PrivateRoute><Maryam /></PrivateRoute>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

