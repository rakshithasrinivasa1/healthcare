import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
      await axios.post('http://localhost:5000/users', { name, email, password, role })
      .then(result => console.log(result))
      .catch(err => console.log(err))
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Register</h2>
          {status && <Alert variant={status.includes('successful') ? 'success' : 'danger'}>{status}</Alert>}
          <Form className="register-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </Form.Control>
            </Form.Group>

            <p className="text-muted text-center">Your data is safe with us! We promise not to spam!</p>

            <Button variant="primary" type="submit" className="w-100">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
