import React, { useState } from 'react';
import axios from '.src/axios';

const EmergencyRequestForm = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        '/api/emergencies',
        { description, location },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setStatus('Emergency request submitted successfully!');
    } catch (error) {
      setStatus('Error submitting emergency request.');
    }
  };

  return (
    <div>
      <h2>Emergency Request Form</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Describe your emergency"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Your Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Submit Request</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default EmergencyRequestForm;
