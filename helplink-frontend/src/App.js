import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Uncomment and add necessary components */}
        {/* <Route path="/emergency" element={<EmergencyRequestForm />} />
        <Route path="/dashboard" element={<ResponderDashboard />} />
        <Route path="/" element={<LoginPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
