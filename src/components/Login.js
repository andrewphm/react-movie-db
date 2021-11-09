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

  const [user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setError(false);
    const { username, password } = login;
    try {
      // Demo account
      if (e.target.innerText === 'Demo login') {
        const demoUser = 'gramsay';
        const demoPassword = process.env.REACT_APP_DEMO_PASSWORD;
        const requestToken = await API.getRequestToken();
        const sessionId = await API.authenticate(
          requestToken,
          demoUser,
          demoPassword
        );
        await setUser({ sessionId: sessionId.session_id, username: demoUser });

        navigate('/react-movie-db');
        return;
      }

      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );
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
      <Button name="demo" text="Demo login" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Login;
