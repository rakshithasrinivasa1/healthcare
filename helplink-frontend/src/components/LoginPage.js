// import axios from '.src/axios';
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //       await axios.post('http://localhost:5000/users', {email, password })
  //       .then(result => console.log(result))
  //       .catch(err => console.log(err))
  //   }

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
