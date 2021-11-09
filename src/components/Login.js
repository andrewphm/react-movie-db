import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';

// Components
import Button from './Button';

// Styles
import { Wrapper } from './Login.styles';

// Context
import { Context } from '../context';

const initialState = { username: '', password: '' };

const Login = () => {
  const [login, setLogin] = useState(initialState);
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    const { username, password } = login;
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );

      console.log(sessionId);
      setUser({ sessionId: sessionId.session_id, username });

      navigate('/react-movie-db');
    } catch (error) {
      setError(true);
    }
  };

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      {error && <div className="error">There was an error!</div>}
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={login.username}
        name="username"
        onChange={handleInput}
        placeholder="username"
        required
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        value={login.password}
        name="password"
        onChange={handleInput}
        placeholder="password"
        required
      />
      <Button text="Login" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Login;
