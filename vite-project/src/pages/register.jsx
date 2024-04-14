import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { setCookie } from '../helpers/cookie_helper'; // Import the setCookie function from the cookie.js file

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/auth/register', {
        email,
        name,
        password,
        surname,
      });

      // Save the response data to a cookie
      const data = response.data
      setCookie('token', data.token, 7);

      // Redirect to the homepage or another page
      window.location.href = '/home';
    } catch (error) {
      console.error(error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Зарегистрироваться</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label >Почта</Form.Label>
          <Form.Control
            type="email"
            placeholder="Введите Вашу почту"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formText">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="name"
            placeholder="Введите Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formText">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control
            type="surname"
            placeholder="Введите вашу фамилию"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
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
          Зарегистрироваться
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;