import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import EmergencyRequestForm from './components/EmergencyRequestForm';
import ResponderDashboard from './components/ResponderDashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/emergency" component={EmergencyRequestForm} />
          <Route path="/dashboard" component={ResponderDashboard} />
          <Route path="/" exact component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
