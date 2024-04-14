import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { setCookie } from '../helpers/cookie_helper'; // Import the setCookie function from the cookie.js file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/auth/login', {
        email,
        password,
      });

      setCookie('token', JSON.stringify(response.data), 7);

      window.location.href = '/';
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Войти</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Почта</Form.Label>
          <Form.Control
            type="email"
            placeholder="Введите Вашу почту"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Введите ваш пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mt-4">
          Войти
        </Button>
      </Form>
      <div className="text-center mt-3">
        <p>Нет аккаунта? <a href="/register">Зарегистрируйтесь</a></p>
      </div>
    </Container>
  );
};

export default Login; 
