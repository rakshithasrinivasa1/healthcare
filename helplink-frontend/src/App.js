import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import VolunteerLogin from './components/VolunteerLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/volunteer" element={<VolunteerLogin />} />
        <Route path="/" element={<UserLogin />} />
      </Routes>
    </Router>
  );
};

export default App;






// import React from 'react';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import UserLogin from './components/UserLogin';
// import VolunteerLogin from './components/VolunteerLogin';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/volunteer" element={<VolunteerLogin />} />
//         <Route path="/" element={<UserLogin />} />
//         {/* Uncomment and add necessary components */}
//         {/* <Route path="/emergency" element={<EmergencyRequestForm />} />
//         <Route path="/dashboard" element={<ResponderDashboard />} />
//         <Route path="/" element={<LoginPage />} /> */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
