import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from '../axios';

const socket = io('http://localhost:5000'); // Adjust the URL based on your backend server

const ResponderDashboard = () => {
  const [emergencies, setEmergencies] = useState([]);

  useEffect(() => {
    const fetchEmergencies = async () => {
      const response = await axios.get('/api/emergencies');
      setEmergencies(response.data.emergencies);
    };

    fetchEmergencies();

    socket.on('newEmergency', (emergency) => {
      setEmergencies((prevEmergencies) => [emergency, ...prevEmergencies]);
    });

    return () => {
      socket.off('newEmergency');
    };
  }, []);

  return (
    <div>
      <h2>Responder Dashboard</h2>
      <ul>
        {emergencies.map((emergency) => (
          <li key={emergency._id}>
            {emergency.description} - {emergency.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponderDashboard;
